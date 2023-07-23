import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import CalculateChildAge from './Components/CalculateChildAge';
import MeetTheDevelopers from './Developers/MeetTheDevelopers';
import Home from './Components/Home';
import FourOFour from './Components/Four0Four';

//Commons

import Header from './Commons/Header';
import Footer from './Commons/Footer';



export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/child-age' element={<CalculateChildAge />} />
          <Route path='/meet-the-developers' element={<MeetTheDevelopers />} />
          <Route path='/*' element={<FourOFour />} />
        </Routes>

        <Footer/>
      </BrowserRouter>


      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
