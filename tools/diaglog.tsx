import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CustomInput from "@/components/ui/CustomInput";

export function UserRequestForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Talk To Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Connect With Us</DialogTitle>
          <DialogDescription>
            Kindly fill and submit
          </DialogDescription>
        </DialogHeader>
        <div className="gap-y-4">
          <div className="flex flex-col gap-4">
          <CustomInput label="Name" id="custom-input" type="text" />
          <CustomInput label="Email" id="custom-input" type="email" />
          <CustomInput label="Contact" id="custom-input" type="number" />
          <CustomInput label="Request" id="custom-input" type="textarea" />
          
          

          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
