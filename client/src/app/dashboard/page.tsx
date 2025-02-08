"use client";
import React from 'react'
import CardPopularProducts from './CardPopularProducts';
import CardSalesSummary from './CardSalesSummary';
import CardPurchaseSummary from './CardPurchaseSummary';
import CardExpenseSummary from './CardExpenseSummary';
import StatCard from './StatCard';
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb:4 custom-grid-rows pb-5`}>
            <CardPopularProducts />
            <CardSalesSummary />
            <CardPurchaseSummary />
            <CardExpenseSummary />
            <StatCard 
            title = "Customer & expenses"
            primaryIcon={<Package className='text-blue-100 w-6 h-6'/>}
            dateRange='20 - 27 January 2025'
            details={[
                {   title: "Customer Growth",
                    amount: "175.00",
                    changePercentage: 187,
                    IconComponent:TrendingUp
                },
                {   title: "Expenses",
                    amount: "15.00",
                    changePercentage: -56,
                    IconComponent:TrendingDown
                }
            ]} />

            <StatCard 
            title = "Dues & pending Orders"
            primaryIcon={<CheckCircle className='text-blue-100 w-6 h-6'/>}
            dateRange='20 - 27 January 2025'
            details={[
                {   title: "Dues",
                    amount: "250",
                    changePercentage: 131,
                    IconComponent:TrendingUp
                },
                {   title: "Pending Orders",
                    amount: "157",
                    changePercentage: -56,
                    IconComponent:TrendingDown
                }
            ]} />
            
            <StatCard 
            title = "Sales & Discount"
            primaryIcon={<Tag className='text-blue-100 w-6 h-6'/>}
            dateRange='20 - 27 January 2025'
            details={[
                {   title: "Sales",
                    amount: "1006.00",
                    changePercentage: 23,
                    IconComponent:TrendingUp
                },
                {   title: "Discount",
                    amount: "234",
                    changePercentage: 16,
                    IconComponent:TrendingUp
                }
            ]} />
        </div>
    )
}

export default Dashboard;