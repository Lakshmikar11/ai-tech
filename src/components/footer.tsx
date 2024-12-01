import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold">Halix Tech Solutions</h2>
          <p className="text-sm text-muted-foreground mt-4">
            Leading the way in innovative IT solutions. Let us transform your business with technology.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="/cloud-computing" className="text-sm hover:underline">Cloud Computing</a></li>
            <li><a href="/cybersecurity" className="text-sm hover:underline">Cybersecurity</a></li>
            <li><a href="/it-infrastructure" className="text-sm hover:underline">IT Infrastructure</a></li>
            <li><a href="/software-development" className="text-sm hover:underline">Software Development</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-sm text-muted-foreground">Email: <a href="mailto:lakshmikar53@gmail.com" className="hover:underline">lakshmikar53@gmail.com</a></p>
          <p className="text-sm text-muted-foreground">Phone: <a href="tel:+1234567890" className="hover:underline">+91 7989010995</a></p>
          <p className="text-sm text-muted-foreground">Address: Andhra Pradesh, India</p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
          <form className="space-y-4">
            <Input type="email" placeholder="Your Email Address" />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>

      {/* Separator */}
      <Separator className="my-8" />

      {/* Bottom Bar */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Halix Tech Solutions. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Built with ❤️ and technology by Halix Tech Solutions.
        </p>
      </div>
    </footer>
  );
}
