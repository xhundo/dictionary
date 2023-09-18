import React, { useState, useEffect, useContext } from 'react';
import { Header } from './components/Header';
import { FontProvider } from './contexts/FontContext';
import { Root } from './Root';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import { DataProvider } from './contexts/DataContext';

const App: React.FC<{}> = () => {
  const [isDropdownOpen, setDropdown] = useState<boolean>(false);
  return (
    <ThemeProvider>
      <Root setDrop={setDropdown} isDropOpen={isDropdownOpen}>
        <DataProvider>
          <FontProvider>
            <Header isDropopen={isDropdownOpen} setDrop={setDropdown} />
            <Layout />
          </FontProvider>
        </DataProvider>
      </Root>
    </ThemeProvider>
  );
};
export { App };
