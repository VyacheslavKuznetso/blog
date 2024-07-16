import styles from "./styles.module.css";

import { CardBlog } from "../CardBlog/CardBlog";

export const CardList = () => {
  return (
    <div className={styles.list}>
      <CardBlog />
      <CardBlog />
      <CardBlog />
      <CardBlog />
      <CardBlog />
    </div>
  );
};
