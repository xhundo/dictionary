import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FontProvider } from './contexts/FontContext';

const App: React.FC<{}> = () => {
  return (
    <div className="h-screen">
      <FontProvider>
        <Header />
      </FontProvider>
    </div>
  );
};
export { App };
