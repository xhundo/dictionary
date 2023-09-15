import React, { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';
import { Book } from '../assets/Book';
import { FontContext } from '../contexts/FontContext';
import { Path } from '../assets/Path';
import { Moon } from '../assets/Moon';

const Header: React.FC = (): JSX.Element => {
  const fontContext = useContext(FontContext);
  const toggleFont = () => {};

  return (
    <header className="flex justify-center">
      <nav className="mt-58 mb-51 flex w-3/4 justify-between">
        <Book />
        <Select font={fontContext!.font} toggleFont={toggleFont} />
      </nav>
    </header>
  );
};

const Select: React.FC<{ font: string; toggleFont: () => void }> = ({
  font,
  toggleFont
}) => {
  return (
    <div
      className="flex w-[250px] items-center justify-between"
      onClick={toggleFont}
    >
      <h1
        className={clsx(
          `${font === 'Sans Serif' && 'text-dark-grayish pr-8 font-sans'}`
        )}
      >
        {font}
      </h1>
      <Path />
      <div className="bg-pipe h-[32px] w-[1px]"></div>
      <Switcher />
    </div>
  );
};

const Switcher: React.FC<{}> = ({}) => {
  return (
    <div className="flex h-[20px] w-[80px] items-center">
      <div className="w-[40px] rounded-full bg-[#171717]"></div>
      <Moon />
    </div>
  );
};

export { Header };
