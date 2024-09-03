import { ACTIONS } from "@/actions";
import Editor from "@/components/editor";
import Sidebar from "@/components/sidebar";
import { initSocket } from "@/lib/socket";
import { IClient } from "@/types";
import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import { toast } from "sonner";

const EditorPage = () => {
  const [clients, setClients] = useState<IClient[]>([]);
  const socketRef = useRef<Socket>();
  const reactNavigator = useNavigate();
  const location = useLocation();
  const { roomId } = useParams();
  useEffect(() => {
    const init = async () => {
      try {
        socketRef.current = await initSocket();

        // Joining a room
        socketRef.current.emit(ACTIONS.JOIN, {
          roomId,
          name: location.state?.name,
      });

       // Listening for joined event
       socketRef.current.on(ACTIONS.JOINED, ({clients, name, socketId}) => {
        if(location.state.name !== name){
          toast.success(`${name} joined the room`, {
            duration: 1500,
            position: 'top-right'
          });
        }
        setClients(clients);
      })

    } catch (error) {
        console.error("Socket connection failed:", error);
        toast.error("Socket connection failed, try again later.");
        reactNavigator("/");
      }
    };

    init();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        console.log("Socket disconnected");
      }
    };
  }, []);


  if(!location.state){
    return <Navigate to={"/"} />
  }
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <Sidebar clients={clients} />
      <Editor />
    </div>
  );
};
export default EditorPage;
