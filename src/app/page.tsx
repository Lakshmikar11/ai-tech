import Image from "next/image";
import Stickyheader from "@/components/ui/stickyheader";
import Herosection from "@/components/herosection";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
    <Stickyheader />
    <Herosection />
    <Services />
    <Testimonials />
    <About />
    <Contact />
    <Footer />
    </>
        
  );
}
