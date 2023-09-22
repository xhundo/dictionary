import React, { useState, useEffect, createContext } from 'react';
import type { FontContextType, Font } from '@/interfaces';

const FontContext = createContext<FontContextType | null>(null);

const FontProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [font, setFont] = useState<Font>((): Font => {
    return (localStorage.getItem('font') as Font) ?? 'Sans Serif';
  });

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

export { FontContext, FontProvider };
