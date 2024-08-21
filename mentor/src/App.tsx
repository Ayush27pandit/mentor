import { Route, Routes } from "react-router-dom"
import Btn from "./components/Btn.js"
import "./index.css"
import Lobby from "./screens/Lobby"
import Room from "./screens/Room.js"

function App() {
  
  return (
    <>
<Routes>
   <Route path="/room/:roomId" element={<Room/>} />
  <Route path="/lobby" element={<Lobby/>}/>
</Routes>
         </>
  )
}

export default App
