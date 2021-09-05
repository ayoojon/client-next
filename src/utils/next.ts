export const imgLoader =
  (url: string) =>
  ({ src, width, quality }) => {
    return `${url}${src}?w=${width}&q=${quality || 75}`;
  };
