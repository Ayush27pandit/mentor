import { Route, Routes } from "react-router-dom";
//import Btn from "./components/Btn.js"
import "./index.css";
import Lobby from "./screens/Lobby";
import Room from "./screens/Room.js";
import Home from "./screens/Home.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
