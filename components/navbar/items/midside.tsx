"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mobile Apps",
    href: "",
    description:
      "We relay on react-native framework for android and ios mobile applications",
  },
  {
    title: "Web Apps",
    href: "",
    description:
      "For designing, we use shadui/tailwind/ for styling, nextjs for backend and frontend development",
  },
  {
    title: "Python",
    href: "",
    description:
      "By using django/fastapi we build the most secure backends. We use reactjs for frontend",
  },
  {
    title: "php",
    href: "",
    description: "Very versatile frameworks for building backends",
  },
  {
    title: "Node js",
    href: "",
    description:
      "A javascript package for building backends",
  },
  {
    title: "Java",
    href: "",
    description:
      "versatile programming language that is used for both server-side and client-side development",
  },
]

export function MidsideItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      YouFoundUs
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      We design very interactive and user-friendly websites and mobile apps(ios and android)
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="" title="Who are YouFoundUs">
                Young and fresh minds venturing the world.
              </ListItem>
              <ListItem href="" title="Pricing">
                Payments(Pricing are made by YOU) are made after the work is done and tested.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Why Us</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

          <ListItem href="" title="Reliable">
                Very timely and organized in the name of service delivery.
              </ListItem>
              <ListItem href="" title="Team Work">
                We are colleborated to achieve the same goal
              </ListItem>
              <ListItem href="" title="Intergrity">
                Honesty and trustworthy plays a big role in our day in activities.
              </ListItem>
              </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>What we offer</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Read more about us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
