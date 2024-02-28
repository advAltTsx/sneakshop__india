import Image from "next/image";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
  } from "@radix-ui/react-icons"
   
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"

  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function NavBar() {
  return (
    <nav className="flex h-24 w-full bg-black">
      <div className=" h-full w-1/5 p-6"></div>
      <div className="h-full w-3/5 p-6 flex items-center justify-center">
        <Drawer>
          <DrawerTrigger>
            {" "}
            <button className="shadow-[0_0_0_3px_#000000_inset] pl-2 pr-32 w-full py-1 bg-transparent border text-sm text-white/80 border-black dark:border-white dark:text-white/70 text-black rounded-lg transform  transition duration-400">
              Search...
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-black border-0">
            <div className="w-full h-auto p-8 flex items-center justify-center">
            <Command className="rounded-lg bg-black">
      <CommandInput placeholder="Search or navigate pages..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <PersonIcon className="mr-2 h-4 w-4" />
            <span>Account</span>
            <CommandShortcut>⌘A</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
            <span>Notifications</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <GearIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className=" h-full w-1/5 p-6  flex items-center justify-center">

<Sheet>
  <SheetTrigger><button><svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9H13H19M5 15H19" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
</button></SheetTrigger>
  <SheetContent side={'left'} className="bg-black border-0">
    <div className="h-full w-full py-24">
            
            <div className="flex items-center p-4"><PersonIcon className="mr-2 h-4 w-4" />
            <span>Account</span>
            </div>
            <div className="flex items-center p-4">
            <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
            <span>Notifications</span>
            </div>
            <div className="flex items-center p-4">
            <GearIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            </div>
    </div>
  </SheetContent>
</Sheet>

      </div>
    </nav>
  );
}
