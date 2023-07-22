import Button from "./design-components/Button";
import NavBar from "./NavBar";
import Description from "./design-components/Description";



export default function LandingPage() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };
  return (
    <div className="bg-gradient-to-r from-[#c4ff6c] to-[#2ae200] h-screen">
      <NavBar/>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 p-4">
        <h1 className="text-7xl font-extrabold tracking-tight text-white hover:text-indigo-500">
          Tip Tap Tracker
        </h1> 
        <img 
        className="w-64 z-[50]"
        src="src/assets/DALL·E_toddler.png" alt="banner"/>    
        </div>  
      </div>
      <Description/>
        <div className="mt-12 text-center"> 
          <Button onClick={handleClick}>START</Button>
        </div>
    </div>
  );
}
