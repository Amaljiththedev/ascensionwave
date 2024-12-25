"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <div className="flex items-center justify-between px-4 py-2 shadow-md rounded-lg">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img 
            src="/logo5.png" 
            alt="Logo" 
            className="h-20 w-24 object-contain" 
          />
        </div>

        {/* Menu Section */}
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-6 text-sm ">
              <HoveredLink href="/">Home</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Service">
            <div className="flex flex-col space-y-6 text-sm">
              <HoveredLink href="/service">Service</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Connect">
            <div className="flex flex-col space-y-6 text-sm">
              
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
