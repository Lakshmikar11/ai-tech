import { Card, CardContent } from "./ui/card"
export default function About(){
    return(
        <div className="my-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">About Us</h2>
                <p className="text-lg text-muted-foreground">
                Empowering businesses with innovative IT solutions and exceptional service.
                </p>
             </div>

            <Card className="shadow-md max-w-4xl mx-auto">
                <CardContent>
                    <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
                    <p className="text-lg text-muted-foreground">
                     We are a forward-thinking IT consulting company committed to driving growth and efficiency for businesses worldwide. With a focus on innovation, we offer a comprehensive range of services, including cloud computing, IT infrastructure design, and cybersecurity solutions. Our mission is to empower organizations with the tools and expertise needed to succeed in a digital world.
                    </p>
                </CardContent>
            </Card>
        </div>

    )
}