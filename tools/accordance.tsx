"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const navlinks = [
  {
    name: 'Python',
    link: "/python"

  },
  {
    name:'Javascript',
    link: "/javascript"
  },
  {
    name:'Php',
    link: "/php"

  },
  {
    name:'Java',
    link:"/java"
  }
]


import Link from "next/link"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
  
  export function AccordionLeftbar() {
    const router = useRouter()
    const pathname = usePathname()
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Languages</AccordionTrigger>

          <AccordionContent>
          <div className="flex flex-col gap-4">
            {navlinks.map(({link, name}) => (
              <Link
              key={name}
              className={` ${pathname === link ? 'bg-secondary' : ""} rounded-md p-3 hover:bg-none transition-colors duration-500`}
              href={link}
              >{name}</Link>
            ))}
          </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Expertise</AccordionTrigger>
          <AccordionContent>
          <div className="flex flex-col gap-4">
            <Link className="bg-secondary rounded-md p-3" href={"/"}>Django</Link>
            <Link className="bg-secondary rounded-md p-3" href={"/"}>Nextjs</Link>
            <Link className="bg-secondary rounded-md p-3" href={"/"}>Java Servlets and JSP</Link>
            <Link className="bg-secondary rounded-md p-3" href={"/"}>React</Link>
            <Link className="bg-secondary rounded-md p-3" href={"/"}>Nodejs</Link>
            <Link className="bg-secondary rounded-md p-3" href={"/"}>Android studio/Xcode</Link>

          </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Duration</AccordionTrigger>
          <AccordionContent>
          <div className="flex flex-col gap-4">
            <p>Depends on the requirements of the project</p>
            <i>For simple with no integrations, it takes about some few hours in a day</i>
            <p>For complex applications, it may take upto one month i.e from mobile apps to websites</p>
          </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>LogOut</AccordionTrigger>
          <AccordionContent>
            <Button>Logout</Button>
          </AccordionContent>
            
        </AccordionItem>
      </Accordion>
    )
  }
  