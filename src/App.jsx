import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./Layouts/MainLayout";
import Contact from "./pages/Contact/Contact";
import Basket from "./pages/Basket/Basket";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Detail from "./pages/Detail/Detail";
import "./assets/responsive.scss"

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route element={<MainLayout/>}>

      <Route path="/" element={<Home/>} /> 
      <Route path="/contact" element={<Contact/>} /> 
      <Route path="/cart" element={<Basket/>} /> 
      <Route path="/about" element={<About/>} /> 
      <Route path="*" element={<NotFound/>} /> 
      <Route path="/detail/:id" element={<Detail/>} /> 
      </Route>
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
