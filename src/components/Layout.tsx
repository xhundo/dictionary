import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Howl } from 'howler';
import { FontContext } from '../contexts/FontContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataContext } from '../contexts/DataContext';
import { SearchBar } from './SearchBar';
import { PlayButton } from './PlayButton';

const Layout: React.FC = () => {
  const { theme } = useContext(ThemeContext)!;
  const { font } = useContext(FontContext)!;
  let { definition: data, setQuery, errors } = useContext(DataContext)!;

  const showLayout = () => {
    if (data && !errors) {
      const pick =
        font === 'Sans Serif'
          ? font.toLowerCase().trim().replace(' ', '')
          : font.toLowerCase();

      const definition = {
        word: data.word,
        phonetic: data.phonetic,
        audio: data?.phonetics[0]?.audio,
        pos: data.meanings[0].partOfSpeech
      };

      console.log(data, errors);

      const audio = new Howl({
        src: [definition.audio]
      });

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
          <main className="flex flex-col">
            <div className="flex gap-5">
              <p
                className={`font-${pick} text-2xl ${
                  pick === 'sansserif' && 'font-bold italic'
                }  ${theme === 'dark' ? 'text-white' : 'text-dark-grayish'}`}
              >
                {definition.pos}
              </p>
              <span className="bg-span h-[1px] w-full self-center"></span>
            </div>
            <p
              className={`font-${pick} mt-[38px] text-xl font-normal text-grayish`}
            >
              Meaning
            </p>
          </main>
        </div>
      );
    } else {
      if (errors) {
        let { title, message, resolution } = errors;
        console.log(title, message, resolution);
      }
      return <div></div>;
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
