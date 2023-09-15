export interface FontContentType {
  font: Font;
  setFont?: React.Dispatch<Font>;
}

export type Font = 'Sans Serif' | 'Serif' | 'Mono';
