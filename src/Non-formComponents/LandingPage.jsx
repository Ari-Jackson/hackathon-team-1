import Button from "../design-components/Button";
import NavBar from "../design-components/NavBar";
//import Description from "../design-components/Description";



export default function LandingPage() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };
  return (
    <div className="bg-gradient-to-r from-[#c4ff6c] to-[#2ae200] flex flex-col">
      <NavBar />
      <div className="flex flex-col md:flex-row flex-grow justify-center">
        <h1 className="w-[20%] text-7xl font-extrabold tracking-tight text-white hover:text-indigo-500 p-4 flex">
          Tip Tap Tracker
        </h1>
        <div>
        <img
          className="w-64 flex-grow"
          src="src/assets/DALL·E_toddler.png"
          alt="banner"
        />
        </div>     
      </div>
      <h2 className="text-center my-12 text-white italic text-2xl">Empower parents, path to execellence for your child </h2>
    
      <div className="mt-12 text-center">
        <Button onClick={handleClick}>START</Button>
      </div>
    </div>
  );
}
