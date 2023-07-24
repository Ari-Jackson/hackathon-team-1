const LinkToPDFButton = () => {
  return (
    <div>
      <a
        href="https://www.michaeltaymormd.com/storage/app/media/forms/master-set-asq.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto">
          Download PDF
        </button>
      </a>
    </div>
  );
};

export default LinkToPDFButton;
