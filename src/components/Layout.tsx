import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Definition } from '../interfaces';
import { Howl } from 'howler';
import _ from 'lodash';
import { setPick } from '../utils/helper';
import { FontContext } from '../contexts/FontContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataContext } from '../contexts/DataContext';
import { SearchBar } from './SearchBar';
import { PlayButton } from './PlayButton';

const Layout: React.FC<{}> = ({}) => {
  const { theme } = useContext(ThemeContext)!;
  const { font } = useContext(FontContext)!;
  let { definition: data, setQuery, errors } = useContext(DataContext)!;

  const pick = setPick(font);
  let definition: Definition;

  const showLayout = () => {
    if (data && !errors) {
      console.log(data);

      definition = {
        word: data.word,
        phonetic: data.phonetic,
        audio: data.phonetics[0]?.audio,
        pos_noun: data.meanings[0].partOfSpeech,
        pos_verb: data.meanings[1]?.partOfSpeech,
        meaning_one: data.meanings[0],
        meaning_two: data.meanings[1],
        synonyms: data.meanings[0].synonyms,
        example: data.meanings[1]?.definitions[0].example
      };

      const audio = new Howl({
        src: [definition.audio]
      });

      console.log('meaning: ', definition.meaning_one, definition.meaning_two);

      const renderMarkup = (): JSX.Element[] => {
        return definition.meaning_one.definitions.map(
          ({ definition }: { definition: string }) => {
            return (
              <div>
                <ol key={_.uniqueId()} className="ml-[22px] list-outside">
                  <li
                    className={`mb-3 list-disc ${
                      theme === 'dark' ? 'text-white' : 'text-dark-grayish'
                    } leading-6  marker:text-purple font-${pick} text-xl font-normal`}
                  >
                    {definition}
                  </li>
                </ol>
              </div>
            );
          }
        );
      };

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
                {definition.pos_noun}
              </p>
              <span className="h-[1px] w-full self-center bg-span"></span>
            </div>
            <p
              className={`font-${pick} mb-6 mt-[38px] text-xl font-normal text-grayish`}
            >
              Meaning
            </p>
            <section className="mb-63 pl-[22px]">{renderMarkup()}</section>
            <section className="mb-[53px] flex gap-6">
              <p className={`font-${font} text-xl font-normal text-grayish`}>
                Synonyms
              </p>
              <p className={`font-bold text-purple font-${pick}  text-xl`}>
                {definition.synonyms[0]}
              </p>
            </section>
            {data.meanings.length > 1 ? (
              definition.meaning_two.definitions
                .map(({ definition: def }: { definition: string }) => {
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
                          {definition.pos_verb}
                        </p>
                        <span className="h-[1px] w-full self-center bg-span"></span>
                      </div>
                      <p
                        className={`font-${pick} mb-6 text-xl font-normal text-grayish`}
                      >
                        Meaning
                      </p>
                      <ol key={_.uniqueId()} className="ml-[22px] list-disc">
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
                      <div className="mb-10">
                        {definition.example && (
                          <p
                            className={`ml-[22px] text-lg text-grayish font-${pick} font-normal`}
                          >
                            "{definition.example}"
                          </p>
                        )}
                      </div>
                      <span className="h-[1px] w-full self-center bg-span"></span>
                    </>
                  );
                })
                .slice(0, 1)
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
    <main className="mt-59 flex min-h-full w-1/2 flex-col self-center">
      <SearchBar />
      {showLayout()}
    </main>
  );
};

export { Layout };
