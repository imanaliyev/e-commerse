import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./Layouts/MainLayout";
import Contact from "./pages/Contact/Contact";
import Basket from "./pages/Basket/Basket";

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route element={<MainLayout/>}>

      <Route path="/" element={<Home/>} /> 
      <Route path="/contact" element={<Contact/>} /> 
      <Route path="/cart" element={<Basket/>} /> 
      </Route>
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
