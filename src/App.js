import React from "react";
import { Route, Routes } from 'react-router-dom'
import Display from "./Display";

function App() {


  return (
    <main className="flex flex-col justify-start items-center w-screen min-h-screen  bg-gray-300">
      <Routes>
        <Route path='/' element={<Display />} />
      </Routes>
    </main>

  );
}

export default App;
