import React from "react";

/**
 * This parser function parses a string looking for markdown
 * bold styled text using double asterisks (**), and returns
 * a react fragment with that text enclosed in <span> tags.
 *
 * @param str string to be parsed for text to highlight.
 * @returns a React Fragment with the desired text to highlight enclosed in <span> elements.
 * @example
 * let str = "These are **highlighted words**, **these aren't*";
 * parser(str);
 * //returns:
 * <>These are <span>highlighted words</span>, **these aren't*</>
 */
export default function parser(str: string): React.ReactNode {
  /**
   * regexp to check if there are any words that match markdown bold pattern
   * tab, linefeed, carriage return, and single "*" characters are ignored.
   */
  const regexp = /\*{2}([^\t\n\r*]*)\*{2}/g;

  const splitStr = str.split(regexp);

  return (
    <>
      {splitStr.map((text, index) => {
        return index % 2 === 0 ? text : <span key={`${index}`}>{text}</span>;
      })}
    </>
  );
}
