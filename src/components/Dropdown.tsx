import React, { useContext, useEffect, memo, useRef } from 'react';
import type { Font, Opts } from '@/interfaces';
import { ThemeContext } from '@/contexts/ThemeContext';

const Dropdown: React.FC<{
  fonts: Opts[];
  changeFont: React.Dispatch<Font> | undefined;
  toggleDropdown: () => void;
  isDropdownOpen: boolean;
  setDropdown: () => void;
}> = ({ fonts, changeFont, toggleDropdown }) => {
  const handleFont = (evt: React.MouseEvent<HTMLLIElement>): void => {
    changeFont?.(evt.currentTarget.textContent as Font);
    localStorage.setItem('font', evt.currentTarget.textContent as string);
    toggleDropdown();
  };

  // Theme context
  const { theme } = useContext(ThemeContext)!;

  useEffect(() => {
    // Event listener for select dropdown
    document.addEventListener('keydown', toggleDropdown);
    document.addEventListener('click', close, true);

    // Clean up listeners when unmounting
    return () => {
      document.removeEventListener('keydown', toggleDropdown);
      document.removeEventListener('click', close);
    };
  }, []);

  const close = (e: Event) => {
    if (e.target) toggleDropdown();
  };

  return (
    <div
      className={`${
        theme === 'dark'
          ? 'bg-liteblk shadow-custom-2'
          : 'bg-white shadow-custom'
      } absolute left-[-4px] top-[45px]  flex max-h-[152px] max-w-[183px] flex-col justify-around gap-2 rounded-2xl p-6`}
    >
      {fonts.map((f: Opts, idx: number) => (
        <li
          className={`hover:text-purple ${
            theme === 'dark' ? 'text-white' : 'text-dark-grayish'
          } cursor-pointer list-none text-sm ${f.style}`}
          onClick={handleFont}
          key={idx}
        >
          {f.font}
        </li>
      ))}
    </div>
  );
};

export { Dropdown };
