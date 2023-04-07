import { useEffect, useState } from 'react';

function getNumeral(val: number, variants: string[]) {
  let n = Math.abs(val)

  n %= 100

  if (n >= 5 && n <= 20) {
    return `${val} ${variants[2]}`;
  }

  n %= 10

  if (n === 1) {
    return `${val} ${variants[0]}`;
  } else if (n >= 2 && n <= 4) {
    return `${val} ${variants[1]}`;
  }

  return `${val} ${variants[2]}`;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  function fixQueryString(query: string) {
    let result = query;

    if (query[0] !== '(') result = '(' + result;
    if (query[query.length - 1] !== ')') result = result + ')';

    return result;
  }

  useEffect(() => {
    let media = window.matchMedia(fixQueryString(query));

    if (media.matches !== matches) setMatches(media.matches);

    function callback() {
      setMatches(media.matches);
    }

    window.addEventListener('resize', callback);

    return () => {
      window.removeEventListener('resize', callback);
    }
  }, [matches, query]);

  return matches;
}

export { getNumeral, useMediaQuery };