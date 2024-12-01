import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Cybersecurity</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Protect your digital assets with our robust cybersecurity services</p>
                </CardContent>
                <CardFooter>
                    <Button>Learn More</Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Cloud Computing</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Optimize your business with scalable and secure cloud solutions</p>
                </CardContent>
                <CardFooter>
                    <Button>Learn More</Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>IT Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Streamline operations with our reliable IT infrastructure solutions</p>
                </CardContent>
                <CardFooter>
                    <Button>Learn More</Button>
                </CardFooter>
            </Card>
        </div>

        <div className="my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
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