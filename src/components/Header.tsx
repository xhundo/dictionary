import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import clsx from 'clsx';
import { Book } from '../assets/Book';
import { FontContext } from '../contexts/FontContext';
import { Path } from '../assets/Path';
import { Moon } from '../assets/Moon';
import type { Opts, Font } from '../interfaces';

const Header: React.FC = (): JSX.Element => {
  const fontContext = useContext(FontContext);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleFont = () => {};

  const toggleModal = () => {
    if (isModalOpen) setModalOpen(false);
    else setModalOpen(true);
  };

  return (
    <header className="flex justify-center">
      <nav className="mt-58 flex w-3/4 justify-between">
        <Book />
        <Select
          font={fontContext!.font}
          toggleFont={toggleFont}
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
  toggleFont: () => void;
  openModal: () => void;
  isOpen: boolean;
  changeFont: React.Dispatch<Font> | undefined;
}> = ({ font, toggleFont, openModal, isOpen, changeFont }) => {
  return (
    <div
      className="relative flex w-[250px] items-center justify-evenly"
      onClick={toggleFont}
    >
      <h1
        className={clsx(
          `${font === 'Sans Serif' && 'text-dark-grayish w-[80px] font-sans'}`,
          `${font === 'Serif' && 'text-dark-grayish w-[80px]  font-serif'}`,
          `${font === 'Mono' && 'text-dark-grayish  w-[80px] font-mono'}`
        )}
      >
        {font}
      </h1>
      {isOpen && (
        <Modal
          fonts={[
            { font: 'Sans Serif', style: 'font-sans' },
            { font: 'Serif', style: 'font-serif' },
            { font: 'Mono', style: 'font-mono' }
          ]}
          changeFont={changeFont}
          toggleModal={openModal}
        />
      )}
      <Path openModal={openModal} />
      <div className="bg-pipe h-[32px] w-[1px]"></div>
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
    toggleModal();
  };

  return (
    <div className="shadow-custom absolute left-[10px] top-[34px] flex max-h-[152px] max-w-[183px] flex-col justify-around gap-2 rounded-2xl bg-white p-6">
      {fonts.map((f: Opts, idx: number) => (
        <li
          className={
            'hover:text-purple text-dark-grayish cursor-pointer list-none text-sm ' +
            f.style
          }
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
  return (
    <div className="flex h-[20px] w-[80px] items-center justify-between">
      <div className="bg-grayish hover:bg-purple h-full w-[40px] items-center rounded-full duration-150 ease-in">
        <div className="m-0 cursor-pointer rounded-full border-white bg-white"></div>
      </div>
      <Moon />
    </div>
  );
};

export { Header };
