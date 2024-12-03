import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function Contact(){
    return(
        <div className="my-16 px-4 sm:px-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                    Have questions or need assistance? We’re here to help.
                </p>
            </div>

            <Card className="shadow-md max-w-4xl sm:max-w-4xl mx-auto">
                <CardContent>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div>
                        <Label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name
                        </Label>
                        <Input id="name" type="text" placeholder="Your Full Name" />
                    </div>

                    <div>
                        <Label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </Label>
                        <Input id="email" type="email" placeholder="yourname@example.com" />
                    </div>

                    <div className="sm:col-span-2">
                        <Label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Type your message here..."
                            rows={5}
                            className="w-full"
                        />
                    </div>

                    <div className="sm:col-span-2 text-center">
                        <Button type="submit" className="w-full sm:w-auto px-6">
                            Send Message
                        </Button>
                    </div>
                    </form>
                </CardContent>
            </Card>

            <div className="text-center mt-10">
                <p className="text-lg">
                    You can also reach us at <span className="font-bold">lakshmikar53@gmail.com</span>
                </p>
                <p className="text-lg">
                     Or call us at <span className="font-bold">+91 7989010995</span>
                </p>
            </div>
        </div>

    )
}