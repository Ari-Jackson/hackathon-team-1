import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import CalculateChildAge from "./Components/CalculateChildAge";
import MeetTheDevelopers from "./Developers/MeetTheDevelopers";
import Home from "./Components/Home";
import FourOFour from "./Components/Four0Four";

//Commons

import Header from "./Commons/Header";
import Footer from "./Commons/Footer";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/child-age" element={<CalculateChildAge />} />
          <Route path="/meet-the-developers" element={<MeetTheDevelopers />} />
          <Route path="/*" element={<FourOFour />} />
        </Routes>

        <Footer />
      </BrowserRouter>

      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
