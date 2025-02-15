import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/Login";
import Mainpage from "./assets/mainpage";

function App() {
  return (
    <>      <Routes>
        <Route path="/Login-Zustand/" element={<Login />} /> 
        <Route path="/Login-Zustand/mainpage" element={<Mainpage />} />
      </Routes>
      </>

  );
}

export default App;
