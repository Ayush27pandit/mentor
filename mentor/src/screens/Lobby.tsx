import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSocket } from "@/context/SocketProvider";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");

    const navigate=useNavigate();

    const socket =useSocket()


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log({
            email, 
            room
        });
        socket.emit('room:join',{
            email, 
            room
        })
    }, [email, room,socket]);

    const handleJoinRoom=useCallback((data)=>{
        const {email,room}=data;
        console.log(email,room)

        navigate(`/room/${room}`)
    },[])

    useEffect(()=>{
        socket.on("room:join",handleJoinRoom)
        return()=>{
            socket.off('room:join',handleJoinRoom)
        }
    },[socket])


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">enter email</label>
            <input type="email" name="email" id="email" value={email} 
            onChange={(e)=>{setEmail(e.target.value)}} />
            <label htmlFor="room">enter room id</label>
            <input type="number" value={room} onChange={(e)=>{
                setRoom(e.target.value)
            }} name="room" id="room" />
            <button type="submit">Join</button>
        </form>
    );
}

export default Lobby;
