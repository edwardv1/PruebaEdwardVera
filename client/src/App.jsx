import "tailwindcss/tailwind.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";; //"http://localhost:3001/"; || https://pruebaedwardvera-production.up.railway.app/

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
      </Routes>
    </>
  )
}

export default App
