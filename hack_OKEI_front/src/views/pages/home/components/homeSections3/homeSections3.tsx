import styles from "./homeSections3.module.css";
const HomeSections3 = () => {
  return (
    <div className={styles.homePage_sections3_container}>
      <div className={styles.homePage_sections3__item_vr_ar}>
            <h2>Трек AR</h2>
            <p>
              разработать приложение дополненной реальности используя любую
              среду разработки
            </p>
          </div>
          <div className={styles.homePage_sections3__item_3d}>
            <h2>Трек 3D </h2>
            <p>создание 3D-модели</p>
          </div>
          <div className={styles.homePage_sections3__item_vr_ar}>
            <h2>Трек VR</h2>
            <p>
              разработать приложение виртуальной реальности используя любую
              среду разработки
            </p>
          </div>
    </div>
  )
}

export default HomeSections3
