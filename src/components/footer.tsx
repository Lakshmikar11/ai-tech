import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-3xl font-bold">Halix Tech Solutions</h2>
          <p className="text-sm text-opacity-75 mt-4">
            Leading the way in innovative IT solutions. Let us transform your business with technology.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-green-400">Services</h3>
          <ul className="space-y-2">
            <li><a href="/cloud-computing" className="text-sm hover:underline hover:text-green-300">Cloud Computing</a></li>
            <li><a href="/cybersecurity" className="text-sm hover:underline hover:text-green-300">Cybersecurity</a></li>
            <li><a href="/it-infrastructure" className="text-sm hover:underline hover:text-green-300">IT Infrastructure</a></li>
            <li><a href="/software-development" className="text-sm hover:underline hover:text-green-300">Software Development</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-green-400">Contact</h3>
          <p className="text-sm text-opacity-75">Email: <a href="mailto:lakshmikar53@gmail.com" className="hover:underline hover:text-green-300">lakshmikar53@gmail.com</a></p>
          <p className="text-sm text-opacity-75">Phone: <a href="tel:+91 7989010995" className="hover:underline hover:text-green-300">+91 7989010995</a></p>
          <p className="text-sm text-opacity-75">Address: Andhra Pradesh, India</p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-green-400">Stay Connected</h3>
          <form className="space-y-4">
            <Input type="email" placeholder="Your Email Address" className="w-full bg-white text-gray-800 placeholder:text-gray-400" />
            <Button className="w-full bg-green-600 hover:bg-green-700">Subscribe</Button>
          </form>
        </div>
      </div>

      {/* Separator */}
      <Separator className="my-8 border-t-2 border-green-400" />

      {/* Bottom Bar */}
      <div className="text-center">
        <p className="text-sm text-opacity-75">
          &copy; {new Date().getFullYear()} Halix Tech Solutions. All rights reserved.
        </p>
        <p className="text-sm text-opacity-75 mt-1">
          Built with ❤️ and technology by Halix Tech Solutions.
        </p>
      </div>
    </footer>
  );
}
