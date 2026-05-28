"use client"

import * as React from "react"
import Link from "next/link"

import type { NavLink } from "@/lib/portfolio-types";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

type NavigationMenusProps = {
  items: NavLink[];
};

export function NavigationMenus({ items }: NavigationMenusProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {
          items.map(({ label, href }) => (
            <NavigationMenuItem key={`${label}-${href}`}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={href} className={"text-xs font-semibold text-muted-foreground md:text-sm"}>{label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}
