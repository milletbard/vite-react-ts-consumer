import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RemoteA = React.lazy(() => import("remoteA/App"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/remoteA" element={<RemoteA />} />
          {/* <Route
            path="/remoteA"
            element={
              <Suspense fallback={<p>Loading Remote...</p>}>
                <RemoteA />
              </Suspense>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
