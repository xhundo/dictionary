import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
const Root: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-liteblk duration-700' : 'bg-white duration-700'
      } flex min-h-screen flex-col`}
    >
      {children}
    </div>
  );
};
export { Root };
