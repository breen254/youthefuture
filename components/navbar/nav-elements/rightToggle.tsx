import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AvatarPic } from "./avatar"
import SettingIcon from "@/tools/settingIcon"

export function RightToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer">
        
        <Button  variant="outline"><SettingIcon/></Button>
            

        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <h2>Mine</h2>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <h2>Wozaa</h2>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
