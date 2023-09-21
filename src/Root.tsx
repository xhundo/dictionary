import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
const Root: React.FC<{
  children: React.ReactNode;
  setDrop: any;
  isDropOpen: boolean;
}> = ({ children, setDrop, isDropOpen }) => {
  const { theme } = useContext(ThemeContext)!;

  const handleDrop = () => {
    if (isDropOpen) {
      setDrop(false);
    }
  };

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-liteblk duration-700' : 'bg-white duration-700'
      } flex min-h-screen flex-col`}
      onClick={handleDrop}
    >
      {children}
    </div>
  );
};
export { Root };
