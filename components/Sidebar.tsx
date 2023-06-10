"use client";

import Box from "@/components/Box";
import SidebarItem from "@/components/SidebarItem";
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
               <div className=" flex flex-col gap-y-4 px-5 py-4">
                   {routes.map((route) => (
                       <SidebarItem key={route.label} {...route}>

                       </SidebarItem>
                   ))}
               </div>
             </Box>
              <Box className="overflow-y-auto h-full">
                song lib
              </Box>
          </div>
      </div>
  )
}

export default Sidebar