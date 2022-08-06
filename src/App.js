import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from './pages/Services';
import Products from './pages/Products';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
