import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Moon } from '../assets/Moon';

const Switcher: React.FC<{}> = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  const handleSwitch = () => {
    if (theme === 'light') {
      setTheme?.('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme?.('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="flex w-[80px] items-center justify-between">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark' && true}
          onChange={handleSwitch}
        />
        <span className="slider round"></span>
      </label>
      <Moon theme={theme} />
    </div>
  );
};

export { Switcher };
