
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
import About from "./components/About";
import SignIn from "./components/SignIn";
import Resources from "./components/Resources";


import Footer from "./Commons/Footer";
import CalculateChildAge from "./Components/CalculateChildAge";
import MeetTheDevelopers from "./Developers/MeetTheDevelopers";



//import { useState } from "react";

//Pages



// import FourOFour from "./Components/Four0Four";

// //Commons

// import Header from "./Commons/Header";


export default function App() {
  return (
    <div className="bg-gradient-to-r from-[#ccfff0]  to-[#c2fcff] my-0  h-[100%]">

      <BrowserRouter>
        {/* <Header/> */}
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/sign-in" element={<SignIn/>}/> 
          <Route path="/child-age" element={<CalculateChildAge/>}/> 
          <Route path="/developers" element={<MeetTheDevelopers/>}/> 
          {/* <Route path="/form"  element={Form}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

