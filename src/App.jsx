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
    </>
  );
}
