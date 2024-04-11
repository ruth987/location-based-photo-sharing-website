import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type CardProps = React.ComponentProps<typeof Card>

export function Login({ className, ...props }: CardProps) {
  return (
    <div className=" w-full h-screen ">
        <Card className={cn("w-[380px] mx-auto my-20", className)} {...props}>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome back, share memories with trie!</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" p-2 space-y-4">
        <Input type="email" placeholder="Email" className="" />
        <Input type="password" placeholder="Password"  className=""/>
        </div>

      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ArrowRight className="mr-2 h-4 w-4" /> Login
        </Button>
      </CardFooter>
    </Card>

    </div>
    
  )
}
