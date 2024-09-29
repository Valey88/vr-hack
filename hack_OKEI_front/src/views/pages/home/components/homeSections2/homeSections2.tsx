import styles from "./homeSections2.module.css";

const HomeSections2 = () => {
  return (
    <div>
      <div className={styles.homePage_sections2__title}>
            <h2>Этапы:</h2>
          </div>
          <div className={styles.homePage_sections2__container}>
            <div className={styles.homePage_sections2__container__items}>
              <div
                className={styles.homePage_sections2__container__item__content}
              >
                <div
                  className={styles.homePage_sections2__container__items__image}
                >
                  <img src="/public/1712766157078 1.png" alt="VR изображение" />
                </div>
                <div
                  className={
                    styles.homePage_sections2__container__items__discription
                  }
                >
                  <span
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    отбор
                  </span>
                  <br />
                  <span style={{ color: "#a236d5", fontSize: "25px" }}>
                    с 01 октября по 18 октября
                  </span>
                  <p>
                    необходимо разработать проект согласно заданию выбранного
                    трека и записать видео представление проекта
                  </p>
                </div>
              </div>
              <div
                className={styles.homePage_sections2__container__items_title}
              >
                <p>Результаты отбора <br></br> с 21 по 23 октября</p>
              </div>
              <div
                className={styles.homePage_sections2__container__items_title}
              >
                <p>Результаты финала <br></br> на площадке 10 ноября</p>
              </div>
            </div>
            <div className={styles.homePage_sections2__container__items}>
              <div
                className={styles.homePage_sections2__container__items_title2}
              >
                <p>
                  Участие в хакатоне <br />
                  бесплатное
                </p>
              </div>
              <div
                className={styles.homePage_sections2__container__item__content2}
              >
                <div
                  className={
                    styles.homePage_sections2__container__items__image2
                  }
                >
                  <img src="/public/cubock.png" alt="VR изображение" />
                </div>
                <div
                  className={
                    styles.homePage_sections2__container__items__discription2
                  }
                >
                  <span
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    финал
                  </span>
                  <br />
                  <span style={{ color: "#a236d5", fontSize: "25px" }}>
                    с 08 ноября по 10 ноября
                  </span>
                  <p>очные состязания команд, сформированых на этапе отбора</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default HomeSections2
