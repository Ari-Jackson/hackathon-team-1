const buttonStyles = {
  backgroundColor: "#3b82f6", // bg-blue-500
  "&:hover": {
    backgroundColor: "#2563eb", // hover:bg-blue-600
  },
  color: "#fff", // text-white
  fontWeight: "700",
  marginTop: "1rem",
  marginBottom: "12rem",
  paddingTop: "0.5rem", // py-2
  paddingBottom: "0.5rem", // py-2
  paddingLeft: "1rem", // px-4
  paddingRight: "1rem", // px-4
  borderRadius: "0.25rem", // rounded
  justifyContent: "flex-start", // justify-start
};

const Button = ({ children, style, onClick }) => {
  return (
    <div>
      <button className="" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
