"use client";

import Box from "@/components/Box";
import Library from "@/components/Library";
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
                       // @ts-ignore
                       <SidebarItem key={route.label} {...route}>
                       </SidebarItem>
                   ))}
               </div>
             </Box>
              <Box className="overflow-y-auto h-full">
                <Library>
                </Library>
              </Box>
          </div>
          <main className="h-full flex-1 overflow-y-auto py-2">
              {children}
          </main>
      </div>
  )
}

export default Sidebar