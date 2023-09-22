import React, { useState, useContext } from 'react';
import { motion, AnimatePresence, DragControls } from 'framer-motion';
import clsx from 'clsx';
import { Book } from '@/icons/Book';
import { Switcher } from './Switcher';
import { FontContext } from '@/contexts/FontContext';
import { ThemeContext } from '@/contexts/ThemeContext';
import { Path } from '@/icons/Path';
import { Dropdown } from './Dropdown';
import type { Font } from '@/interfaces';

const Header: React.FC<{ isDropopen: boolean; setDrop: any }> = ({
  isDropopen,
  setDrop
}): JSX.Element => {
  const { font, setFont } = useContext(FontContext)!;

  const openDropdown = () => {
    setDrop(!isDropopen);
  };

  return (
    <header className="flex justify-center">
      <nav className="mt-58 flex w-1/2 justify-between">
        <Book />
        <Select
          font={font}
          openDropdown={openDropdown}
          isOpen={isDropopen}
          changeFont={setFont}
          setDropdown={setDrop}
        />
      </nav>
    </header>
  );
};

const Select: React.FC<{
  font: string;
  openDropdown: () => void;
  isOpen: boolean;
  changeFont: React.Dispatch<Font> | undefined;
  setDropdown: (state: boolean) => void;
}> = ({ font, openDropdown, isOpen, changeFont, setDropdown }) => {
  const { theme } = useContext(ThemeContext)!;

  const buildClsx = () => {
    let style = '';
    switch (font) {
      case 'Sans Serif':
        style = `text-dark-grayish w-[80px] ${
          theme === 'dark' && 'text-white'
        } font-sans font-bold`;
        break;
      case 'Serif':
        style = `text-dark-grayish font-bold w-[80px] ${
          theme === 'dark' && 'text-white'
        } font-serif`;
        break;
      case 'Mono':
        style = `text-dark-grayish w-[80px] ${
          theme === 'dark' && 'text-white'
        } font-mono`;
        break;
    }
    return style;
  };

  return (
    <div className="relative flex w-[250px] items-center">
      <div className="flex items-center gap-4">
        <h1 className={clsx(buildClsx())}>{font}</h1>
        <Path openModal={openDropdown} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10"
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Dropdown
              fonts={[
                { font: 'Sans Serif', style: 'font-sans font-bold' },
                { font: 'Serif', style: 'font-serif font-bold' },
                { font: 'Mono', style: 'font-mono' }
              ]}
              changeFont={changeFont}
              toggleDropdown={openDropdown}
              setDropdown={setDropdown}
              isDropdownOpen={isOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="mx-[26px] h-[32px] w-[1px] bg-pipe"></span>
      <Switcher />
    </div>
  );
};

export { Header };
