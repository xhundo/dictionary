import React, { useState, useEffect, useContext } from 'react';
import { Header } from './components/Header';
import { FontProvider } from './contexts/FontContext';
import { Root } from './Root';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider>
      <Root>
        <FontProvider>
          <Header />
        </FontProvider>
      </Root>
    </ThemeProvider>
  );
};
export { App };
