import React from 'react';
import styles from "./Pagination.module.css";

export default function Pagination() {
  return (
    <div className=' w-full h-[80px] flex items-center justify-center gap-8 '>
        <button className={`${styles.pagination_button} ${styles.pagination_button_edge}`}>1</button>
        <button className={`${styles.pagination_button} ${styles.pagination_button_center}`}>2</button>
        <button className={`${styles.pagination_button} ${styles.pagination_button_edge}`}>3</button>
    </div>
  )
}
