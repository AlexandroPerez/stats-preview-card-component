import styles from "./Card.module.scss";

import parser from "./parse-helper";

export type CardProps = {
  /** object with public path of the card images for mobile and desktop
   * @example
   * { mobile: path, desktop: path }
   */
  imageSrc: {
    mobile: string;
    desktop: string;
  };
  /**
   * Title of the card. Will highlight text enclosed in
   * double asterisk (**), like in markdown.
   * @example
   * Get **valuable insights** that help...
   */
  title: string;
  /** Card description */
  desc: string;
  /**
   * An array of string tuples for the list.
   * Each tuple has: [quantity, description]
   * @example
   * list = {["10k+", "companies"], ["314", "templates"]}
   */
  list: [string, string][];
};

export function Card({ imageSrc, title, desc, list }: CardProps) {
  // media query to serve image depending on user screen
  const mediaQuery = window.matchMedia("(min-width: 880px)");
  // if user starts on a device larger than 880px serve desktop image
  let image = mediaQuery.matches ? imageSrc.desktop : imageSrc.mobile;
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.description}>
        <h2>{parser(title)}</h2>
        <p>{desc}</p>
        <ul>
          {list.map((item, idx) => {
            const [quantity, description] = item;
            return (
              <li key={`item-${idx}`}>
                <span>{quantity}</span>
                <span>{description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
