// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../DesignComponents/Logo";

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-[#38b6ff] via-[#b8e8ff]  to-[#38b6ff] mx-0 h-24 grid grid-cols-2 text-cyan-800  font-bold flex px-12">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex justify-end font-h1 text-2xl items-center p-4 text-white">
        <ul className="gap-6 hidden sm:flex ">
          <li className="hover:text-yellow-100 mx-auto hover:translate-y-[-4px] transition-transform">
            <a href="/#about">About</a>
          </li>
          <li className="hover:text-yellow-100 mx-auto hover:translate-y-[-4px] transition-transform">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="hover:text-yellow-100 mx-auto hover:translate-y-[-4px] transition-transform">
            <Link to="/developers">Developers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
