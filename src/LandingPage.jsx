import Button from "./design-components/Button";
import Description from "./design-components/Description";

export default function LandingPage() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };
  return (
    <div className="bg-gradient-to-r from-[#c4ff6c] to-[#2ae200] h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-7xl font-extrabold tracking-tight text-white hover:text-indigo-500 text-center">
          Tip Tap Tracker
        </h1>
        <Description/>
        <div className="mt-12"> 
          <Button onClick={handleClick}>START</Button>
        </div>
      </div>
    </div>
  );
}
