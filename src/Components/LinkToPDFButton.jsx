import { Link } from "react-router-dom";

const LinkToPDFButton = () => {
  return (
    <button className="py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto">
      <Link
        to="https://www.michaeltaymormd.com/storage/app/media/forms/master-set-asq.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download ASQ PDF
      </Link>
    </button>
  );
};

export default LinkToPDFButton;
