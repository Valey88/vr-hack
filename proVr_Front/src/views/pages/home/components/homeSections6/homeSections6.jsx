import styles from "./homeSections6.module.css";
const HomeSections6 = () => {
  return (
    <div>
      <div className={styles.homePage_sections6__title}>
        <h2>Организаторы и партнёры </h2>
      </div>
      <div className={styles.homePage_sections6__container}>
        <div className={styles.homePage_sections6__container__item_text}>
          <div
            className={styles.homePage_sections6__container__item_text_items}
          >
            <p>Министерство образования Оренбургской области</p>
          </div>
          <div
            className={styles.homePage_sections6__container__item_text_items}
            style={{
              
            }}
          >
            <p>Центр цифрового образования детей «IT-куб» </p>
          </div>
          <div
            className={styles.homePage_sections6__container__item_text_items}
          >
            <p>АО "БАНК ОРЕНБУРГ"</p>
          </div>
        </div>
        <div className={styles.homePage_sections6__container__item_block}>
          <div
            className={styles.homePage_sections6__container__item_block_image}
          >
            <img
              width={200}
              src="/public/IMG_20240412_105433 1.png"
              alt="Логотип"
            />
          </div>
          <div
            className={styles.homePage_sections6__container__item_block_text}
          >
            <span>Дубская Екатерина Сергеевна </span>
            <p>Председатель оргкомитета и руководитель центра «IT-куб» </p>
            <div
              className={
                styles.homePage_sections6__container__item_block_text_social
              }
            >
              <img
                width={80}
                src="/public/IMG_20240412_110328-transformed 1.png"
                alt="Instagram"
              />
              <h5>+7 (987) 883-2424</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSections6;
