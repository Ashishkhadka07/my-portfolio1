import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route 
                path="*" 
                element={
                  <div className="text-center py-20 text-slate-400 font-mono">
                    <h1 className="text-4xl font-bold text-cyan-400 mb-2">404</h1>
                    <p>Page Not Found</p>
                  </div>
                } 
              />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}