import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { RightToggle } from "./rightToggle"
import { AvatarPic } from "./avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DeleteMyAccount } from "@/tools/alertDiaglog"
  
  export function MenubarDrop() {
    return (
      <div className="hidden md:block ">
      <Menubar>




        <MenubarMenu>
          <MenubarTrigger>

                <p className="">Account</p>
            

          </MenubarTrigger>
          <MenubarContent>
          <Link href={"/profile"}>
            <MenubarItem>
              Profile
            </MenubarItem>
            </Link> 
          <Link href={"/"}>

            <MenubarItem>
              Favorites 
            </MenubarItem>
            </Link> 

            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href={"/"}><MenubarItem>Email</MenubarItem></Link>
                <Link href={"/"}><MenubarItem>Messages</MenubarItem></Link>
                <Link href={"/"}><MenubarItem>Whatsapp</MenubarItem></Link>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              <DeleteMyAccount/>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        

      </Menubar>
      </div>
    )
  }
  