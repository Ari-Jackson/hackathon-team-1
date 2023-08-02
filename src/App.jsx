import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
// import Header from "./Commons/Header";

//Pages
// import CalculateChildAge from './Components/CalculateChildAge';
// import MeetTheDevelopers from './Developers/MeetTheDevelopers';
// import Home from './Components/Home';

//Commons
// import About from "./components/About";

import SignIn from "./Components/SignIn";
import Resources from "./Components/Resources";
import Disclaimer from "./Components/Disclaimer";

import Footer from "./Commons/Footer";
import CalculateChildAge from "./Components/CalculateChildAge";
import MeetTheDevelopers from "./Developers/MeetTheDevelopers";
import Form from "./Components/Form";
import Map from "./Components/Map";
import FourOFour from "./Components/Four0Four";
import DisplayResultsCards30 from "./Components/DisplayResultsCards30";

//Age Range Cards
import RangeFirst from "./Components/AgeRangesCards/RangeFirst";
import RangeSecond from "./Components/AgeRangesCards/RangeSecond";
import RangeThird from "./Components/AgeRangesCards/RangeThird";

//import { useState } from "react";

//Pages

// import FourOFour from "./Components/Four0Four";

// //Commons

import Header from "./Commons/Header";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-[#ccfff0]  to-[#c2fcff] my-0  h-[100%] m-0">
      <BrowserRouter>
        <Header />
        <NavBar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/child-age" element={<CalculateChildAge />} />
          <Route path="/developers" element={<MeetTheDevelopers />} />
          <Route path="/*" element={<FourOFour />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/child-age" element={<CalculateChildAge />} />
          <Route path="/form" element={<Form />} />
          <Route path="/map" element={<Map />} />
          <Route path="/children-30-36-months" element={<RangeFirst />} />
          <Route path="/children-36-48-months" element={<RangeSecond />} />
          <Route path="/children-48-60-months" element={<RangeThird />} />
          <Route path="/display-cards" element={<DisplayResultsCards30 />} />
        </Routes>
      
        <div className="h-32"></div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
