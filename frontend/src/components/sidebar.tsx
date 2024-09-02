import Client from "./client";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Copy, LogOut } from "lucide-react";

const Sidebar = () => {
  const clients = [
    {
      name: "Bishal Moktan",
    },
    {
      name: "Sajin Tamang",
    },
  ];
  return (
    <div className="p-4 flex flex-col min-h-screen">
        <div>
      <Logo />
      <Separator className="my-4" />
        </div>
        <h2 className="text-xl">Connected</h2>
        <div className="flex flex-wrap gap-4 mt-4 flex-grow">
          {clients.map((client, index) => (
            <Client username={client.name} key={index} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button className="flex gap-2">
            <Copy /> <span>Copy RoomId</span>
            </Button>
          <Button variant={"destructive"} className="flex gap-2">
          <LogOut />  <span>Leave</span> 
          </Button>
        </div>
    </div>
  );
};
export default Sidebar;