import React, { useContext, useEffect } from 'react';
import type { Font, Opts } from '../interfaces';
import { ThemeContext } from '../contexts/ThemeContext';

const Dropdown: React.FC<{
  fonts: Opts[];
  changeFont: React.Dispatch<Font> | undefined;
  toggleDropdown: () => void;
  isDropdownOpen: boolean;
  setDropdown: (state: boolean) => void;
}> = ({ fonts, changeFont, toggleDropdown, isDropdownOpen, setDropdown }) => {
  const handleFont = (evt: React.MouseEvent<HTMLLIElement>): void => {
    changeFont?.(evt.currentTarget.textContent as Font);
    localStorage.setItem('font', evt.currentTarget.textContent as string);
    toggleDropdown();
  };

  const themeContext = useContext(ThemeContext);

  let mode_setting = {
    theme: themeContext!.theme,
    setTheme: themeContext?.setTheme
  };

  return (
    <div
      className={`${
        mode_setting.theme === 'dark' ? 'shadow-custom-2' : 'shadow-custom'
      } absolute left-[-4px] top-[45px] flex max-h-[152px] max-w-[183px] flex-col justify-around gap-2 rounded-2xl ${
        mode_setting.theme === 'dark' && 'bg-lightblk'
      } p-6`}
    >
      {fonts.map((f: Opts, idx: number) => (
        <li
          className={`hover:text-purple ${
            mode_setting.theme === 'dark' ? 'text-white' : 'text-dark-grayish'
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