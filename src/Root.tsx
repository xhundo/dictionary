import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
const Root: React.FC<{
  children: React.ReactNode;
  setDrop: any;
  isDropOpen: boolean;
}> = ({ children, setDrop, isDropOpen }) => {
  const themeMode = useContext(ThemeContext);

  const handleDrop = () => {
    if (isDropOpen) {
      setDrop(false);
    }
  };

  return (
    <div
      className={`${
        themeMode!.theme === 'dark' ? 'bg-lightblk' : 'bg-white'
      } h-screen`}
      onClick={handleDrop}
    >
      {children}
    </div>
  );
};
export { Root };
