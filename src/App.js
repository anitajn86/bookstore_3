import React from "react";
import Navbar from "./components/Navbar";
import { Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";
// import Adminpage from "./pages/Adminpage";



function App() {
  return(
    <div>
      <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/settings" element={<Settings/>} /> 
        </Routes> 
       
    </div>
  ) 
  
}

export default App;
