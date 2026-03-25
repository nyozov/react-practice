import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import PracticeHook from "./components/PracticeHook";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="hooks" element={<PracticeHook />} />
      </Routes>
    </>
  );
}

export default App;
