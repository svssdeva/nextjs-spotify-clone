"use client";

import Box from "@/components/Box";
import {usePathname} from "next/navigation";
import React, {useMemo} from "react";
import {BiHome} from "react-icons/bi";
import {HiSearch} from "react-icons/hi";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
            icon: BiHome
        },
        {
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
            icon: HiSearch
        }
    ], [pathname]);

    return (
      <div className="flex h-full">
          <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
             <Box>

             </Box>
          </div>
      </div>
  )
}

export default Sidebar