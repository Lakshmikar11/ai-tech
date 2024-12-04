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
<link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
  <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
    <h1 className="text-lg font-bold">Halix Tech Solutions</h1>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex space-x-6">
      <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
      <Link href="/aboutpage" className="text-muted-foreground hover:text-primary">About</Link>
      <Link href="/" className="text-muted-foreground hover:text-primary">Services</Link>
      <Link href="/test" className="text-muted-foreground hover:text-primary">Contact</Link>
    </nav>

    <div className="flex md-4 space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
    {/* Mobile Navigation - Menubar */}
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild className="md:hidden">
          <Button variant="ghost">
            <span>☰</span> {/* Hamburger icon */}
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