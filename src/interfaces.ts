export interface ThemeContextType {
  theme: Theme;
  setTheme?: React.Dispatch<Theme>;
}

export interface FontContentType {
  font: Font;
  setFont?: React.Dispatch<Font>;
}

export interface Opts {
  font: string;
  style: string;
}

export type Font = 'Sans Serif' | 'Serif' | 'Mono';
export type Theme = 'light' | 'dark';
