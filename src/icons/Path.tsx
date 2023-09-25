const Path: React.FC<{ openDropdown: () => void }> = ({ openDropdown }) => {
  return (
    <div className="cursor-pointer" onClick={() => openDropdown()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="9"
        viewBox="0 0 13 9"
        fill="none"
      >
        <path d="M1 1L7 7L13 1" stroke="#A445ED" strokeWidth="1.5" />
      </svg>
    </div>
  );
};
export { Path };
