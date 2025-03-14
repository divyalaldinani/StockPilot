import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();


async function deleteAllData(orderedFileNames: string[]) {
    // Convert file names to model names in camelCase
const modelNames = orderedFileNames.map((fileName) => {
    const modelName = path.basename(fileName, path.extname(fileName));
    return modelName.charAt(0).toLowerCase() + modelName.slice(1); // Convert to camelCase
});

// Reverse the order to delete child tables first
    for (const modelName of modelNames.reverse()) {
        const model: any = prisma[modelName as keyof typeof prisma];

        if (model) {
            await model.deleteMany(); // Delete all records from the table
            console.log(`Cleared data from ${modelName}`);
        } else {
            console.error(`Model ${modelName} not found in Prisma Client.`);
        }
    }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  const orderedFileNames = [
    "products.json",
    "expenseSummary.json",
    "sales.json",
    "salesSummary.json",
    "purchases.json",
    "purchaseSummary.json",
    "users.json",
    "expenses.json",
    "expenseByCategory.json",
  ];

  await deleteAllData(orderedFileNames);

  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];

    if (!model) {
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    for (const data of jsonData) {
      await model.create({
        data,
      });
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  }
}

main()
.catch((e) => {
console.error(e);
})
.finally(async () => {
await prisma.$disconnect();
});
