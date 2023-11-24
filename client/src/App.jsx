import "tailwindcss/tailwind.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";

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
