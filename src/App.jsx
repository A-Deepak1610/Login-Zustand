import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/Login";
import Mainpage from "./assets/mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login-Zustand/" element={<Login />} /> 
        <Route path="/Login-Zustand/mainpage" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
