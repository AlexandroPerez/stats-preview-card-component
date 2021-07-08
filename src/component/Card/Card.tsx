import React from "react";
import "./Card.css";
import styles from "./Card.module.scss";

export type CardProps = {
  /** source of the card image */
  imageSrc: string;
  /**
   * You should provide a title in an <h2>,  and a
   * description in one <p> paragraph. To highlight
   * a word in the title, use a <span>.
   * @example
   * <h2>Get <span>insights</span> that help...</h2>
   * <p>Discover the benefits of data ...</p>
   */
  children: React.ReactNode;
  /**
   * An array of string tuples for the list.
   * Each tuple has: [quantity, description]
   * @example
   * list = {["10k+", "companies"], ["314", "templates"]}
   */
  list: [string, string][];
};

export function Card({ imageSrc, children, list }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={imageSrc} alt="" />
      </div>
      <div className={styles.description}>
        {children}
        <ul>
          {list.map((item) => {
            const [quantity, description] = item;
            return (
              <li>
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
