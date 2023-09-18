const PlayButton: React.FC<{ action: () => void }> = ({ action }) => {
  return (
    <div
      className="bg-purp/10 hover:bg-purp/100 relative  right-6 h-75 w-75 cursor-pointer self-center  rounded-full duration-200"
      onClick={action}
    >
      <svg
        className="absolute right-6 top-[27px] z-10 opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          className="fill-purp duration-200 hover:fill-white"
          fillRule="inherit"
          clipRule="inherit"
          d="M0 0V21L21 10.5L0 0Z"
        />
      </svg>
    </div>
  );
};
export { PlayButton };
