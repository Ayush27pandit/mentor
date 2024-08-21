import { useSocket } from '@/context/SocketProvider'
import React, { useCallback, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import peer from '@/service/peer'

const Room = () => {

    const socket=useSocket();
    const [remoteSocketId,setRemoteSocketId]=useState(null)
    const [myStream,setMyStream]=useState()

    const handleUserJoined=useCallback(({email,id})=>{
        console.log(`Email ${email} has joined`)
        setRemoteSocketId(id)
    },[])

    const handleCallUser=useCallback(async ()=>{
        const stream=await navigator.mediaDevices.getUserMedia({audio:true,video:true})
        setMyStream(stream);
    },[])

    useEffect(()=>{
        socket.on('user:joined',handleUserJoined)

        return ()=>{
            socket.off('user:joined',handleUserJoined)
        }
    },[socket,handleUserJoined])

  return (
    <>
    <h1>Room</h1>
    <h4>{remoteSocketId ? "COnnected":"not eonnceted"}</h4>
    {remoteSocketId && <button onClick={handleCallUser}>hi</button>}
    {
        myStream && 
        <>
        <h1>My Stream</h1>
        <ReactPlayer width={300} playing muted height={500} url={myStream} />
        </> 
    }
    </>
  )
}

export default Room