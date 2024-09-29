import React from "react";
import styles from "./homeSections4.module.css";

const HomeSections4 = () => {
  return (
    <div>
      <div className={styles.homePage_sections4__title}>
        <h2>Кто может участвовать?</h2>
      </div>
      <div className={styles.homePage_sections4__container}>
        <div className={styles.homePage_sections4__container__item_image}>
          <img width={500} src="/public/mans 1.png" alt="VR изображение" />
        </div>
        <div className={styles.homePage_sections4__container__item_text}>
          <div
            className={styles.homePage_sections4__container__item_text_items}
          >
            <p>подростки 11 - 18 лет (включительно)</p>
          </div>
          <div
            className={styles.homePage_sections4__container__item_text_items}
          >
            <p>обучающиеся центра «IT-куб»</p>
          </div>
          <div
            className={styles.homePage_sections4__container__item_text_items}
          >
            <p>обучающиеся ДТ «Кванториум»</p>
          </div>
          <div
            className={styles.homePage_sections4__container__item_text_items}
          >
            <p>ученики профильных классов </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSections4;
