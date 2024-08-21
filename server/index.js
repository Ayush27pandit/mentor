const express=require("express")
const {Server}=require("socket.io")

const io=new Server(8000,{
    cors:true
})
const app=express()


const emailToSocketIdMap=new Map();
const socketIdToMap=new Map();


io.on('connection',(socket)=>{
    console.log("socket connected",socket.id)
    socket.on('room:join',data=>{

        console.log(data)
        const{email,room}=data;
        emailToSocketIdMap.set(email,socket.id)
        socketIdToMap.set(socket.id,email)
        io.to(room).emit('user:joined',{email,id:socket.id})
        socket.join(room)
        io.to(socket.id).emit('room:join',data)
    })
})
