import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import PracticeHook from "./components/PracticeHook";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-12 p-6">
        <Routes>
          <Route path="hook" element={<PracticeHook />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
