import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Moon } from '../assets/Moon';

const Switcher: React.FC<{}> = ({}) => {
  const themeContext = useContext(ThemeContext);

  let mode_setting = {
    theme: themeContext!.theme,
    setTheme: themeContext?.setTheme
  };

  const handleSwitch = () => {
    let { theme, setTheme } = mode_setting;
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
          checked={mode_setting.theme === 'dark' && true}
          onChange={handleSwitch}
        />
        <span className="slider round"></span>
      </label>
      <Moon theme={mode_setting.theme} />
    </div>
  );
};

export { Switcher };
