import React from 'react';
import { Header } from './components/Header';
import { FontProvider } from './contexts/FontContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Root } from './Root';
import { Layout } from './components/Layout';
import { DataProvider } from './contexts/DataContext';

const App: React.FC<{}> = ({}) => {
  return (
    <ThemeProvider>
      <DataProvider>
        <FontProvider>
          <Root>
            <Header />
            <Layout />
          </Root>
        </FontProvider>
      </DataProvider>
    </ThemeProvider>
  );
};
export { App };
