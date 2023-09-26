import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Book } from '@/icons/Book';
import { Switcher } from './Switcher';
import { FontContext } from '@/contexts/FontContext';
import { ThemeContext } from '@/contexts/ThemeContext';
import { Path } from '@/icons/Path';
import { Dropdown } from './Dropdown';
import type { Font } from '@/interfaces';

const Header: React.FC<{}> = ({}): JSX.Element => {
  const { font, setFont } = useContext(FontContext)!;
  const [dropdown, setDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    if (dropdown) setDropdown(false);
    else setDropdown(true);
  };

  return (
    <header className="mx-6 flex justify-center">
      <nav className="mt-6 flex w-full justify-between md:mx-8  md:mt-58  md:w-full  md:gap-x-24 lg:w-1/2">
        <Book />
        <Select
          font={font}
          isDropOpen={dropdown}
          changeFont={setFont}
          setDropdown={toggleDropdown}
        />
      </nav>
    </header>
  );
};

const Select: React.FC<{
  font: string;
  isDropOpen: boolean;
  changeFont: React.Dispatch<Font> | undefined;
  setDropdown: () => void;
}> = ({ font, isDropOpen, changeFont, setDropdown }) => {
  const { theme } = useContext(ThemeContext)!;

  const buildClsx = () => {
    switch (font) {
      case 'Sans Serif':
        return `text-dark-grayish w-[80px] ${
          theme === 'dark' && 'text-white'
        } font-sans font-bold`;
      case 'Serif':
        return `text-dark-grayish font-bold w-[80px] ${
          theme === 'dark' && 'text-white'
        } font-serif`;
      case 'Mono':
        return `text-dark-grayish w-[80px] ${
          theme === 'dark' && 'text-white'
        } font-mono`;
    }
  };

  return (
    <div className="md:w1/2  relative flex w-[250px] items-center">
      <div className="flex items-center gap-4">
        <h1 className={clsx(buildClsx())}>{font}</h1>
        <Path openDropdown={setDropdown} />
      </div>
      <AnimatePresence>
        {isDropOpen && (
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
              toggleDropdown={setDropdown}
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
