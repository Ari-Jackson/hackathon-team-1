// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../DesignComponents/Logo";

export default function NavBar() {
  return (
    <nav className=" grid grid-cols-2 text-cyan-800 mx-24 py-9  font-bold flex">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex justify-end font-h1 text-2xl   max-w[1240px] m-auto flex justify-between items-center p-4 ">
        <ul className="gap-6 hidden sm:flex ">
          <li className="hover:text-indigo-500 mx-auto hover:translate-y-[-4px] transition-transform">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-indigo-500 mx-auto hover:translate-y-[-4px] transition-transform">
            <Link to="/resources">Resources</Link>
          </li>
          {/* <li className="hover:text-indigo-500">
            <a href="/contact">Contact</a>
          </li> */}
        </ul>
        {/* mobile button  */}
      </div>
    </nav>
  );
}
