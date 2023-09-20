import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Howl } from 'howler';
import { v4 as uuidv4 } from 'uuid';
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
        pos: data.meanings[0].partOfSpeech,
        pos_two: data?.meanings[1]?.partOfSpeech,
        meaning: data.meanings,
        synonyms: data.meanings[0].synonyms,
        example: data?.meanings[1]?.definitions[0].example
      };

      console.log(data.meanings);
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
              <span className="h-[1px] w-full self-center bg-span"></span>
            </div>
            <p
              className={`font-${pick} mb-6 mt-[38px] text-xl font-normal text-grayish`}
            >
              Meaning
            </p>
            <section className="mb-63 pl-[22px]">
              {definition.meaning.length > 1
                ? definition.meaning[0].definitions.map(
                    ({ definition }: { definition: string[] }) => {
                      return (
                        <div>
                          <ol key={uuidv4()} className="ml-[22px] list-outside">
                            <li
                              className={`mb-3 list-disc ${
                                theme === 'dark'
                                  ? 'text-white'
                                  : 'text-dark-grayish'
                              } leading-6  marker:text-purple font-${pick} text-xl font-normal`}
                            >
                              {definition}
                            </li>
                          </ol>
                        </div>
                      );
                    }
                  )
                : definition.meaning[0].definitions.map(
                    ({ definition }: { definition: string }) => {
                      return (
                        <ol key={uuidv4()} className="ml-[22px] list-outside">
                          <li
                            className={`mb-3 list-disc ${
                              theme === 'dark'
                                ? 'text-white'
                                : 'text-dark-grayish'
                            } leading-6  marker:text-purple font-${pick} text-xl font-normal`}
                          >
                            {definition}
                          </li>
                        </ol>
                      );
                    }
                  )}
            </section>
            <section className="mb-[53px] flex gap-6">
              <p className={`font-${font} text-xl font-normal text-grayish`}>
                Synonyms
              </p>
              <p className={`font-bold text-purple font-${pick}  text-xl`}>
                {definition.synonyms[0]}
              </p>
            </section>
            {definition.meaning.length > 1 ? (
              definition.meaning[1].definitions.map(
                ({ definition: def }: { definition: string }) => {
                  return (
                    <>
                      <div className="mb-10 flex gap-5">
                        <p
                          className={`font-${pick} text-2xl ${
                            pick === 'sansserif' && 'font-bold italic'
                          }  ${
                            theme === 'dark'
                              ? 'text-white'
                              : 'text-dark-grayish'
                          }`}
                        >
                          {definition.pos_two}
                        </p>

                        <span className="h-[1px] w-full self-center bg-span"></span>
                      </div>

                      <p
                        className={`font-${pick} mb-6 text-xl font-normal text-grayish`}
                      >
                        Meaning
                      </p>
                      <ol key={uuidv4()} className="ml-[22px] list-disc ">
                        <li
                          className={`mb-3 ml-[22px]  list-outside ${
                            theme === 'dark'
                              ? 'text-white'
                              : 'text-dark-grayish'
                          } leading-6  marker:text-purple font-${pick} text-xl font-normal`}
                        >
                          {def}
                        </li>
                      </ol>
                      {definition.example && (
                        <p
                          className={`ml-[22px] text-lg text-grayish font-${pick} font-normal`}
                        >
                          "{definition.example}"
                        </p>
                      )}
                    </>
                  );
                }
              )
            ) : (
              <></>
            )}
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
    <main className="mt-59 flex min-h-screen w-1/2 flex-col self-center">
      <SearchBar />
      {showLayout()}
    </main>
  );
};

export { Layout };
