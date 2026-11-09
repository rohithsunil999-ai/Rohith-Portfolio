import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./Home"
import Work from "./Work"
import About from "./About"
import Visuals from "./Visuals"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <a href="/" className="logo">Rohith.</a>

        <nav>
          <a href="/">Home</a>
          <a href="/work">Work</a>
          <a href="/about">About</a>
          <a href="/visuals">Visuals</a>
          </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/visuals" element={<Visuals />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Rohith Sunil</p>

        <div>
          <a href="mailto:rohith.suni999@gmail.com">Email</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App