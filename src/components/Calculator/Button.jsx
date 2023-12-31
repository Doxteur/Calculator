const Button = ({ className, value, onClick }) => {
  return (
    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={onClick}>
      {value}
    </button>
  );
};
export default Button;