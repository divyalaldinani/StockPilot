"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import { Archive, CircleDollarSign, Clipboard, Icon, Layout, LucideIcon, Menu, Settings, Settings2, SlidersHorizontal, User } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}
const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
}: SidebarLinkProps) => {
    const pathname = usePathname(); // current url
    const isActive = pathname === href || (pathname === '/' && href === "/dashboard"); // dasboard in home page
    return (
        <Link href = {href} >
            <div className={`cursor-pointer flex items-center 
                ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors
                ${isActive ? "bg-blue-200 text-white" : ""}`}>
                    <Icon className="w-6 h-6 !text-gray-700" />
                    <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>
                        {label}
                    </span>

            </div>
        </Link>
    )
}

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
      (state) => state.global.isSidebarCollapsed
    );
  
    const toggleSidebar = () => {
      dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };
  
    const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64" } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`; 
    return (
        <div className={sidebarClassNames}>
            
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-6 ${isSidebarCollapsed ? "px-3" : "px-8"}`}>
            {/* Logo Container with Conditional Sizing */}
            <div className={`${isSidebarCollapsed ? "w-10 h-10" : "w-10 h-10"}`}>
                <img 
                src="/logo.png" 
                alt="Logo" 
                className="rounded-full w-full h-full object-cover"
                />
            </div>

            {!isSidebarCollapsed && (
                <h1 className="font-extrabold text-2xl">StockPilot</h1>
            )}

            {!isSidebarCollapsed && (
                <button
                className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                onClick={toggleSidebar}
                >
                <Menu className="w-4 h-4" />
                </button>
            )}
            </div>

            {/*Links*/}
            <div className="flex-grow mt-8">
                <SidebarLink href="\dashboard" icon = {Layout} label = "Dashboard" isCollapsed = {isSidebarCollapsed}></SidebarLink>
                <SidebarLink href="\inventory" icon = {Archive} label = "Inventory" isCollapsed = {isSidebarCollapsed}></SidebarLink>
                <SidebarLink href="\products" icon = {Clipboard} label = "Products" isCollapsed = {isSidebarCollapsed}></SidebarLink>
                <SidebarLink href="\users" icon = {User} label = "Users" isCollapsed = {isSidebarCollapsed}></SidebarLink>
                <SidebarLink href="\settings" icon = {Settings2} label = "Settings" isCollapsed = {isSidebarCollapsed}></SidebarLink>
                <SidebarLink href="\expenses" icon = {CircleDollarSign} label = "Expenses" isCollapsed = {isSidebarCollapsed}></SidebarLink>
            </div>
            {/* footer */}
            <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
                <p className="text-center text-s text-gray-500">&copy; 2025 Divya</p>
            </div>
        </div>
    )
}

export default Sidebar;
 