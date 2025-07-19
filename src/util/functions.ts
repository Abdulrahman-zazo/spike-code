/**
 *
 * @param {string} txt - The input text to be sliced
 * @param {number} [max= 50] - The maximum length before ..
 * @returns the sliced text, with an ellipsis (...) appe ...
 */

export const txtSlicer = (txt: string, max: number) => {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  else return txt;
};
