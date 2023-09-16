import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
const Root: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeMode = useContext(ThemeContext);
  return (
    <div
      className={`${
        themeMode!.theme === 'dark' ? 'bg-lightblk' : 'bg-white'
      } h-screen`}
    >
      {children}
    </div>
  );
};
export { Root };
