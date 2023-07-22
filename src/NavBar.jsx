import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
     const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");
  
    // const handleNav = () => {
    //   setNav(!nav);
    // }
  
    useEffect(()=>{
      const changeColor = () => {
        if(window.scrollY >=90){
          setColor("#ffffff");
          setTextColor("#000000");
        }else{
          setColor("transparent");
          setTextColor("#ffffff");
        }
      }
      window.addEventListener("scroll", changeColor)
    },[])
  return (
    <nav style={{backgroundColor: `${color}`}} className="border-gray-200 grid grid-cols-2 text-cyan-800 mx-24 my-9    left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="flex justify-end font-h1 text-2xl    max-w[1240px] m-auto flex justify-between items-center p-4 ">
        <a>Logo</a>

        <ul style={{color: `${textColor}`}} className="hidden sm:flex ">
          <li className="hover:text-indigo-500 mx-auto">
            <a href="/about">About</a>
          </li>
          {/* <li className="hover:text-indigo-500">
            <a href="#projects"><Resources></Resources></a>
          </li> */}
          {/* <li className="hover:text-indigo-500">
            <a href="/contact">Contact</a>
          </li> */}
        </ul>
        {/* mobile button  */}
        <div className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
        </div>
        {/* mobile menu */}
        <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
        : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"}>
          <ul className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-6 font-bold">
            <li className="hover:text-indigo-500 p-4 text-4xl">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-indigo-500 p-4 text-4xl">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-indigo-500 p-4 tex-4xl">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
