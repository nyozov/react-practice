import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import PracticeHook from "./components/PracticeHook";
import PracticeMemo from "./components/PracticeMemo";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-12 p-6">
        <Routes>
          <Route path="/hook" element={<PracticeHook />} />
          <Route path="/memo" element={<PracticeMemo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
