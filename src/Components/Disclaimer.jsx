import { useNavigate } from "react-router-dom";

export default function Disclaimer() {
    const navigate = useNavigate();


    const handleClick =()=>{
        navigate("/child-age")
    }

  return (
    <div className="h-screen">
      <div className="mx-auto mt-[10%] rounded-lg shadow-md bg-white w-[30%] h-[65%] flex grid  p-12">
        <p className=" text-3xl font-extrabold tracking-tight text-[#053560]">
          <div className="text-orange-400 p-0 m-0">&#9888;&#65039;</div>
          <br />
          This is a preliminary assessment tool.
          <br />
          This application is not designed to make any formal diagnosis.
          <br /> Any diagnosis must be made by a medical professional.
        </p>
        <p className="font-semibold">You would need pencil and paper ✏️📓</p>
      </div>
      <div className="flex justify-center mt-32 m-24 ">
        <button
          onClick={handleClick}
          type="button"
          className="ml-inline-block rounded border-2 border-[#0065ff] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-[#0065ff]"
          data-te-ripple-init
        >
          Continue &gt;&gt;
        </button>
      </div>
    </div>
  );
}
