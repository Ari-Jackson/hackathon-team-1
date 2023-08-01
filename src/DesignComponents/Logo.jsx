import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <img
      className=" mt-2 hover:translate-y-[-4px] transition-transform"
      src={logo}
      alt="logo"
      width={50}
    />
  );
}
