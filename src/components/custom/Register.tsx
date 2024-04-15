import { BellRing, ArrowRight, Globe } from "lucide-react"

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
import { Switch } from "@/components/ui/switch"


type CardProps = React.ComponentProps<typeof Card>

export default function Register({ className, ...props }: CardProps) {
  return (
    <div className="w-full  h-screen py-20">
        <Card className={cn("w-[380px] mx-auto ", className)} {...props}>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Welcome, share memories with trie!</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" p-2 space-y-4">
        <Input type="email" placeholder="Email" className="" />
        <Input type="password" placeholder="Password"  className=""/>
        </div>

        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Globe />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Share Location
            </p>
            <p className="text-sm text-muted-foreground">
                Share your location with trie community.
            </p>
          </div>
          <Switch />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ArrowRight className="mr-2 h-4 w-4" /> Signup
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
