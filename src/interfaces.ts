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
