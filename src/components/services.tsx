import { Button } from "./ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export default function Services(){
    return(
    <>
        <div className="text-center my-10">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
            Empowering businesses with cutting-edge IT solutions tailored to your needs.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 py-8">
  {/* Service 1 */}
  <div className="p-4 bg-white shadow rounded flex flex-col items-center">
    <h3 className="text-xl font-semibold mb-4">Service 1</h3>
    <p className="mb-4">Description for Service 1</p>
    <Button className="bg-primary text-white hover:bg-primary-dark">Learn More</Button>
  </div>

  {/* Service 2 */}
  <div className="p-4 bg-white shadow rounded flex flex-col items-center">
    <h3 className="text-xl font-semibold mb-4">Service 2</h3>
    <p className="mb-4">Description for Service 2</p>
    <Button className="bg-primary text-white hover:bg-primary-dark">Learn More</Button>
  </div>

  {/* Service 3 */}
  <div className="p-4 bg-white shadow rounded flex flex-col items-center">
    <h3 className="text-xl font-semibold mb-4">Service 3</h3>
    <p className="mb-4">Description for Service 3</p>
    <Button className="bg-primary text-white hover:bg-primary-dark">Learn More</Button>
  </div>
</div>


        <div className="my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto px-4 sm:px-6">
                <AccordionItem value="item-1">
                    <AccordionTrigger  className="text-lg font-semibold">Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                 </AccordionItem>

                 <AccordionItem value="item-2">
                    <AccordionTrigger  className="text-lg font-semibold">Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                 </AccordionItem>

                 <AccordionItem value="item-3">
                    <AccordionTrigger  className="text-lg font-semibold">Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                 </AccordionItem>
            </Accordion>

        </div>
    </>    
    )
}