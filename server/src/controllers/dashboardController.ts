import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async(
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const popularProducts = await prisma.products.findMany({
            take: 15, // get 15 products
            orderBy: {
                stockQuantity: "desc"
            },
        });
        const salesSummary = await prisma.salesSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        
        const purchaseSummary = await prisma.purchaseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const expenseSummary = await prisma.expenseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });

        const expenseByCategory = expenseByCategorySummaryRaw.map(
            (item) => ({
                ...item,
                amount: item.amount.toString()
            })
        );
        res.json({
            popularProducts,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategory
        })
    } catch {
        res.status(500).json({message: "Error retreiving dashboard metrics"});
    }
}