import React from "react";
import { Route, Routes } from 'react-router-dom'
import Display from "./Display";
import Home from "./components/Home";

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
