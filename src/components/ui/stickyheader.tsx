import { ModeToggle } from "./modetoggle"
export default function Stickyheader(){
    return(
<>
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Halix Tech Solutions</h1>
        <nav className="flex space-x-12 mx-auto">
          <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Portfolio</a>
        </nav>
        <ModeToggle />
      </div>
    </header>

   </> 
    )
}