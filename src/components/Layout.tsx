import React, { useState, useEffect, useContext } from 'react';
import { Howl } from 'howler';
import { FontContext } from '../contexts/FontContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataContext } from '../contexts/DataContext';
import { SearchBar } from './SearchBar';
import { PlayButton } from './PlayButton';

const Layout: React.FC = () => {
  const { theme } = useContext(ThemeContext)!;
  const { font } = useContext(FontContext)!;
  let { definition } = useContext(DataContext)!;

  const showLayout = () => {
    if (definition) {
      const pick =
        font === 'Sans Serif'
          ? font.trim().slice(3).replace('s', '').toLowerCase()
          : font.toLowerCase();

      const audio = new Howl({
        src: [definition?.phonetics[0]?.audio]
      });

      console.log(definition);
      return (
        <div className="relative mt-[43px]">
          <section className="mb-10 flex justify-between">
            <div className="flex flex-col">
              <p
                className={`${
                  theme === 'dark' ? 'text-white' : 'text-dark-grayish'
                } font-${pick} text-[64px] font-bold`}
              >
                {definition.word}
              </p>
              <p className="text-2xl text-purple">{definition.phonetic}</p>
            </div>
            <PlayButton action={() => audio.play()} />
          </section>
        </div>
      );
    }
  };

  return (
    <main className="mt-59 flex w-1/2 flex-col self-center">
      <SearchBar />
      {showLayout()}
    </main>
  );
};
export { Layout };
