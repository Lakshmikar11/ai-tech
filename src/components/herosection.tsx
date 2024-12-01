import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  export default function Herosection(){
    return(
<Card>
  <CardHeader className="flex items-center mx-auto">
    <CardTitle>Innovative IT Solutions for Modern Businesses.</CardTitle>
    <CardDescription>Expertise in Cloud Computing, Cybersecurity, and Data Analytics.</CardDescription>
  </CardHeader>
  <CardContent className="flex space-x-8 mx-auto justify-center">
    <Button>Learn More</Button>
    <Button>Schedule a Call</Button>
  </CardContent>
</Card>
    )
}