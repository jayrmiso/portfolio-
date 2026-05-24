"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const menus: { title: string; href: string }[] = [
  {
    title: "Work",
    href: "#work"
  },
  {
    title: "AboutWork",
    href: "#about"
  },
  {
    title: "Skills",
    href: "#skills"
  },
  {
    title: "Contact",
    href: "#contact",
  }
]

export function NavigationMenus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {
          menus.map(({ title, href }) => (
            <NavigationMenuItem key={title}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={href} className={"text-muted-foreground font-semibold"}>{title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}