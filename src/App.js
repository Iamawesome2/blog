import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
  
function App() {
  return (
      <div className='App'>
          <Header />
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='contact' element={<BlogsPage />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
