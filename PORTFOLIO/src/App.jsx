import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cursor from "./components/Cursor/Cursor"

export default function App() {
  return (
    <>
      <Cursor /> {/* 👈 SIEMPRE afuera */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}