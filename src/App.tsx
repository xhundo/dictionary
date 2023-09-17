import React, { useState, useEffect, useContext } from 'react';
import { Header } from './components/Header';
import { FontProvider } from './contexts/FontContext';
import { Root } from './Root';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC<{}> = () => {
  const [isDropdownOpen, setDropdown] = useState<boolean>(false);
  return (
    <ThemeProvider>
      <Root setDrop={setDropdown} isDropOpen={isDropdownOpen}>
        <FontProvider>
          <Header isDropopen={isDropdownOpen} setDrop={setDropdown} />
        </FontProvider>
      </Root>
    </ThemeProvider>
  );
};
export { App };
