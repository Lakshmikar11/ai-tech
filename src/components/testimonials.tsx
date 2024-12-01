import {
    Carousel,
    CarouselItem,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"
 export default function Testimonials(){
    return(
    <div className="my-16 text-center">
         <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground mb-10">
             See how we’ve helped businesses achieve their IT goals.
            </p>
        <Carousel className="max-w-4xl mx-auto">
            <CarouselItem>
                <Card className="shadow-md">
                    <CardContent>
                        <p className="text-lg italic mb-4">
                        “Their cloud computing solutions revolutionized our operations. Reliable and professional service!”
                        </p>
                        <p className="font-bold">- John Doe, CTO at TechCorp</p>
                    </CardContent>
                </Card>
            </CarouselItem>

            <CarouselItem>
                <Card className="shadow-md">
                    <CardContent>
                        <p className="text-lg italic mb-4">
                        “Their cloud computing solutions revolutionized our operations. Reliable and professional service!”
                        </p>
                        <p className="font-bold">- John Doe, CTO at TechCorp</p>
                    </CardContent>
                </Card>
            </CarouselItem>

            <CarouselItem>
                <Card className="shadow-md">
                    <CardContent>
                        <p className="text-lg italic mb-4">
                        “Their cloud computing solutions revolutionized our operations. Reliable and professional service!”
                        </p>
                        <p className="font-bold">- John Doe, CTO at TechCorp</p>
                    </CardContent>
                </Card>
            </CarouselItem>
        </Carousel>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <Card className="shadow-sm">
                <CardContent className="text-center">
                    <h3 className="text-2xl font-bold">500+</h3>
                    <p className="text-muted-foreground">Projects Delivered</p>
                </CardContent>
            </Card>

            <Card className="shadow-sm">
                <CardContent className="text-center">
                    <h3 className="text-2xl font-bold">200+</h3>
                    <p className="text-muted-foreground">Happy clients</p>
                </CardContent>
            </Card>

            <Card className="shadow-sm">
                <CardContent className="text-center">
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-muted-foreground">Years in Business</p>
                </CardContent>
            </Card>
        </div>
    </div>

    )
 }  