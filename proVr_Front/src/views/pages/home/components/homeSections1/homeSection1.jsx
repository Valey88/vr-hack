import styles from "./homeSections1.module.css";

const HomeSection1 = () => {
  return (
    <div className={styles.homePage__container__content}>
      <div className={styles.backgroundSpots}></div>
      <div className={styles.homePage__container__content__title}>
        <h2>Хакатон</h2>
      </div>
      <div className={styles.homePage__container__content__description}>
        <div className={styles.titleWrapper}>
          <div>
            <h1>
              PRO <span className={styles.vrText}>VR</span>
            </h1>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/public/без фона 2.png" alt="VR изображение" />
          </div>
        </div>
        <div className={styles.homePage__container__content__description__text}>
          <p>с 8 ноября по 10 ноября</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
