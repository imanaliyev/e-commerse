import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route element={<MainLayout/>}>

      <Route path="/" element={<Home/>} /> 
      </Route>
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
