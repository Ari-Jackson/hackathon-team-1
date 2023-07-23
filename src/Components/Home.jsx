import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-in");
  };
  return (
    <div className=" flex flex-col mt-[5%] mb-52">
      <div className="flex flex-col md:flex-row flex-grow justify-center">
        <h1 className="w-[20%] text-7xl font-extrabold tracking-tight text-white hover:text-indigo-500 p-4 flex">
          Tiny Tot Tracker
        </h1>
        <div>
          <img
            className="w-64 flex-grow"
            src="src/assets/DALL·E_toddler.png"
            alt="banner"
          />
        </div>
      </div>
      <h2 className="text-center my-12 text-white italic text-2xl">
        Empower parents, path to execellence for your child{" "}
      </h2>

      <div className="mt-12 text-center">
        <button
          onClick={handleClick}
          className="w-full py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto"
        >
          Let&apos;s Start
        </button>
      </div>
    </div>
  );
}
