import { Link } from "react-router-dom"

export default function Resources() {
  return (
    <div className="h-screen mt-[10%]">
      <ul className="mx-[40%]">
       <li className=" py-4 my-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto">
        <Link to="/map">
        Map of Pre-K providers
        </Link></li>
        <li className=" py-4 my-4  text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto">
        <Link to="/map">
        For Children 30-36 months
        </Link></li>
        <li className=" py-4 my-4  text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto">
        <Link to="/map">
        For Children 36-48 months
        </Link></li>
        <li className=" py-4 my-4  text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto">
        <Link to="/map">
        For Children 48-60 months
        </Link></li>
      </ul>
    </div>
  )
}
