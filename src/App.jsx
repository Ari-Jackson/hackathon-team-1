import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";


//Pages
// import CalculateChildAge from './Components/CalculateChildAge';
// import MeetTheDevelopers from './Developers/MeetTheDevelopers';
// import Home from './Components/Home';
// import FourOFour from './Components/Four0Four';

//Commons
import About from "./Components/About";
import Resources from "./Components/Resources";
import SignIn from "./Components/SignIn";
import Footer from "./Commons/Footer";
import CalculateChildAge from "./Components/CalculateChildAge";



export default function App() {
  return (
    <div className="bg-gradient-to-r from-[#c4ff6c] to-[#2ae200] my-0  h-[100%]">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/sign-in" element={<SignIn/>}/> 
          <Route path="/child-age" element={<CalculateChildAge/>}/> 

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

{
  /* <Route path='/' element={<Home/>} />
          <Route path='/child-age' element={<CalculateChildAge />} />
          <Route path='/meet-the-developers' element={<MeetTheDevelopers />} />
          <Route path='/*' element={<FourOFour />} /> */
}
