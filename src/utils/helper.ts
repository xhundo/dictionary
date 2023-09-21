export const setPick = (font: string): string => {
  if (font === 'Sans Serif') return font.toLowerCase().trim().replace(' ', '');
  else return font.toLowerCase();
};
