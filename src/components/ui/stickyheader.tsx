import Link from "next/link"

export default function Stickyheader(){
    return(
<>
<header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  rel="stylesheet"
/>

  <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
    {/* Logo */}
    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide hover:text-blue-400 transition-all duration-300">
      Halix Tech Solutions
    </h1>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex space-x-8">
      <Link href="/" className="text-lg hover:text-blue-400 transition duration-300">
        Home
      </Link>
      <Link href="/about" className="text-lg hover:text-blue-400 transition duration-300">
        About
      </Link>
      <Link href="/services" className="text-lg hover:text-blue-400 transition duration-300">
        Services
      </Link>
      <Link href="/contact" className="text-lg hover:text-blue-400 transition duration-300">
        Contact
      </Link>
    </nav>

    {/* Social Media Icons */}
    <div className="flex items-center space-x-6">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition duration-300"
      >
        <i className="fab fa-github text-2xl"></i>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition duration-300"
      >
        <i className="fab fa-linkedin text-2xl"></i>
      </a>
    </div>
  </div>

  {/* Mobile Compatibility */}
  <div className="flex flex-col items-center space-y-4 md:hidden mt-4 text-center">
    <Link href="/" className="text-lg hover:text-blue-400 transition duration-300">
      Home
    </Link>
    <Link href="/about" className="text-lg hover:text-blue-400 transition duration-300">
      About
    </Link>
    <Link href="/services" className="text-lg hover:text-blue-400 transition duration-300">
      Services
    </Link>
    <Link href="/contact" className="text-lg hover:text-blue-400 transition duration-300">
      Contact
    </Link>
  </div>
</header>

   </> 
    )
}