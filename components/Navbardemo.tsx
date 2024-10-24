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

      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-6 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Service">
          <div className="flex flex-col space-y-6 text-sm">
            <HoveredLink href="/service">Service</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-6 text-sm">
            <HoveredLink href="/pricing">Pricing</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-6 text-sm">
            <HoveredLink href="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
