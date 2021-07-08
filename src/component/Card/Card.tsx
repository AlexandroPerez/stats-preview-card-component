import React from "react";
import "./Card.css";
import styles from "./Card.module.scss";

import parser from "./parse-helper";

export type CardProps = {
  /** source of the card image */
  imageSrc: string;
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
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={imageSrc} alt="" />
      </div>
      <div className={styles.description}>
        <h2>{parser(title)}</h2>
        <p>{desc}</p>
        <ul>
          {list.map((item, idx) => {
            const [quantity, description] = item;
            return (
              <li key={quantity}>
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
