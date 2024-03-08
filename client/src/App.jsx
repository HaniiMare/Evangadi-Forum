import axios from "./axiosConfig";
import LandingLayout from "./pages/LandingLayout/LandingLayout";
import Login from "./pages/Login";
import Register from "./pages/Reagister";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
export const AppState = createContext();

function App() {
  const[user,setUser] = useState({})
console.log(user)
  const token = localStorage.getItem('token')
  console.log(token)
    const navigate = useNavigate();
    async function checkUser() {
      try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer" + token,
        },
      });
        setUser(data)
        console.log(data)
        
      } catch (error) {
        console.log(error.response);
        // navigate('/login')
        
      }
    }
    useEffect(() => {
      checkUser();

    }, []);
  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/login" element={<Login />} />?
        <Route path="/register" element={<Register />} />
      </Routes>
    </AppState.Provider>
  );
}

export default App;
