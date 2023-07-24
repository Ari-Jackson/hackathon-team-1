import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CalculateChildAge = () => {
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const todaysDate = new Date();
    const dateOfBirth = new Date(birthday);

    const ageInMilliseconds = todaysDate - dateOfBirth;

    const monthsMilliseconds = 1000 * 60 * 60 * 24 * 30.4375;
    const convertAgeToMonths = Math.floor(
      ageInMilliseconds / monthsMilliseconds,
    );

    if (convertAgeToMonths < 36 || convertAgeToMonths >= 60) {
      setAge(
        "This application is designed for children between the ages of 3-5",
      );
    } else {
      setAge(convertAgeToMonths);
    }
  };

  const handleClick = () => {
    let ageGroup =
      age < 42
        ? "36"
        : age < 48
        ? "42"
        : age < 54
        ? "48"
        : age < 60
        ? "54"
        : "60";
    navigate({
      pathname: "/form",
      search: `?age=${ageGroup}`,
    });
  };

  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className=" mx-auto mt-[10%] rounded-lg shadow-md bg-white w-[30%] h-[60%] flex grid  p-12 ">
        <p className="text-3xl font-extrabold tracking-tight text-[#053560] mt-3">
          Please
          <br />
          Select Your
          <br />
          Child&apos;s Date of Birth
        </p>
        <input
          className="bg-slate-100 px-4 mb-6"
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <button
          onClick={calculateAge}
          className="  mx-auto w-[25%] h-[60%] relative rounded px-1 py-1 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Submit</span>
        </button>
        <div className="">
          {typeof age === "number" && !isNaN(age) ? (
            <h3>Age In Months: {age} months</h3>
          ) : (
            <h3>{age}</h3>
          )}
        </div>
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
};

export default CalculateChildAge;
