import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RemoteA = React.lazy(() => import("remoteA"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/remoteA" element={<RemoteA />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
