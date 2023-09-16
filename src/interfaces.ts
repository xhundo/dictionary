export interface FontContentType {
  font: Font;
  setFont?: React.Dispatch<Font>;
}

export interface Opts {
  font: string;
  style: string;
}

export type Font = 'Sans Serif' | 'Serif' | 'Mono';
