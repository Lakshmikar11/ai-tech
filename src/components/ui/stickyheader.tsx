import { ModeToggle } from "./modetoggle"
import { Button } from "./button"
import Link from "next/link"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Stickyheader(){
    return(
<>
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Halix Tech Solutions</h1>
        <nav className="hidden md:flex space-x-6">
        <a href="/" className="text-muted-foreground hover:text-primary">Home</a>
          <a href="/about" className="text-muted-foreground hover:text-primary">About</a>
          <a href="/services" className="text-muted-foreground hover:text-primary">Services</a>
          <a href="/contact" className="text-muted-foreground hover:text-primary">Contact</a>
        </nav>
        <ModeToggle />
      <Menubar>
        <MenubarMenu>
            <MenubarTrigger asChild className="md:hidden">
              <Button variant="ghost">
                <span>☰</span>
              </Button>
            </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/">Home</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/about">About</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/services">Services</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/contact">Contact</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      </div>
    </header>

   </> 
    )
}