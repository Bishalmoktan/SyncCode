
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const LandingForm = () => {
  return (
    <Card className="w-[350px] bg-black">
      <CardHeader>
  
        <CardTitle className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            SyncCode
        </CardTitle>
        <CardDescription>Collaborate and code in real-time with seamless synchronization.</CardDescription>
      </CardHeader>
      <CardContent>
        <form autoComplete="off">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="roomId">RoomId</Label>
              <Input id="roomId" placeholder="Room Id" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

export default LandingForm;