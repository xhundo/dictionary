import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Book } from '../assets/Book';
import { FontContext } from '../contexts/FontContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { Path } from '../assets/Path';
import { Moon } from '../assets/Moon';
import type { Opts, Font } from '../interfaces';

const Header: React.FC = (): JSX.Element => {
  const fontContext = useContext(FontContext);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    if (isModalOpen) setModalOpen(false);
    else setModalOpen(true);
  };

  return (
    <header className="flex justify-center">
      <nav className="mt-58 flex w-1/2 justify-between">
        <Book />
        <Select
          font={fontContext!.font}
          openModal={toggleModal}
          isOpen={isModalOpen}
          changeFont={fontContext!.setFont}
        />
      </nav>
    </header>
  );
};

const Select: React.FC<{
  font: string;
  openModal: () => void;
  isOpen: boolean;
  changeFont: React.Dispatch<Font> | undefined;
}> = ({ font, openModal, isOpen, changeFont }) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext!.theme;

  const buildclsx = () => {
    let style = '';
    switch (font) {
      case 'Sans Serif':
        style = `text-dark-grayish w-[80px] ${
          theme === 'dark' && 'text-white'
        } font-sans`;
        break;
      case 'Serif':
        style = `text-dark-grayish w-[42px] ${
          theme === 'dark' && 'text-white'
        } font-serif`;
        break;
      case 'Mono':
        style = `text-dark-grayish w-[36px] ${
          theme === 'dark' && 'text-white'
        } font-mono`;
        break;
    }
    return style;
  };

  return (
    <div className="relative flex w-[250px] items-center">
      <div className="flex items-center gap-4">
        <h1 className={clsx(buildclsx())}>{font}</h1>
        <Path openModal={openModal} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Modal
              fonts={[
                { font: 'Sans Serif', style: 'font-sans' },
                { font: 'Serif', style: 'font-serif' },
                { font: 'Mono', style: 'font-mono' }
              ]}
              changeFont={changeFont}
              toggleModal={openModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="bg-pipe mx-[26px] h-[32px] w-[1px]"></span>
      <Switcher />
    </div>
  );
};

const Modal: React.FC<{
  fonts: Opts[];
  changeFont: React.Dispatch<Font> | undefined;
  toggleModal: () => void;
}> = ({ fonts, changeFont, toggleModal }) => {
  const handleFont = (evt: React.MouseEvent<HTMLLIElement>): void => {
    changeFont?.(evt.currentTarget.textContent as Font);
    localStorage.setItem('font', evt.currentTarget.textContent as string);
    toggleModal();
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

export { Header };
