export interface ThemeContextType {
  theme: Theme;
  setTheme?: React.Dispatch<Theme>;
}

export interface FontContextType {
  font: Font;
  setFont?: React.Dispatch<Font>;
}

export interface DataContextType {
  definition: any;
  setQuery: React.Dispatch<any>;
  errors: any;
}

export interface Definition {
  word: string;
  phonetic: string;
  audio: string;
  pos_noun: string;
  pos_verb: string;
  meaning_one: {
    definitions: any[];
  };
  meaning_two: {
    definitions: any[];
  };
  synonyms: string[];
  source: string;
  example: string;
}

export interface Error {
  isError: boolean;
  error: string;
}
export interface Opts {
  font: string;
  style: string;
}

export type Font = 'Sans Serif' | 'Serif' | 'Mono';
export type Theme = 'light' | 'dark';
