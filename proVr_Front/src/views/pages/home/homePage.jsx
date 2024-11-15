import styles from "./Home.module.css";
import HomeSection1 from "./components/homeSections1/homeSection1";
import HomeSections2 from "./components/homeSections2/homeSections2";
import HomeSections3 from "./components/homeSections3/homeSections3";
import HomeSections4 from "./components/homeSections4/homeSections4";
import HomeSections5 from "./components/homeSections5/homeSections5";
import HomeSections6 from "./components/homeSections6/homeSections6";
import TestFormUploads from "./test/testFormUploads";
export const homePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePage__container}>
        <HomeSection1 />
        <div className={styles.homePage_sections2}>
          <HomeSections2 />
        </div>
        <div className={styles.homePage_sections3}>
          <HomeSections3 />
        </div>
        <div className={styles.homePage_sections4}>
          <HomeSections4 />
        </div>
        <div className={styles.homePage_sections5}>
          <HomeSections5 />
        </div>
        <div className={styles.homePage_sectionsRegistration__title_button}>
          <h2>2 Далее зарегистрируй свою команду</h2>
          <div>
            <button
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Регистрация завершина
            </button>
          </div>
        </div>
        <div className={styles.homePage_sectionsRegistration__title_button}>
          <h2>
            3 Пройди тестовое задание, которое мы подготовили спецально для вас
          </h2>
          <div>
            <button
              onClick={(event) => {
                event.preventDefault();
                window.location.href = "/Задание для отборочного.pdf";
              }}
            >
              Скачать задание
            </button>
          </div>
        </div>
        <div className={styles.homePage_sectionsRegistration__title_Uploads}>
          <h2>4 Загрузи тестовое задание, что бы мы оценили его</h2>
          <TestFormUploads />
        </div>
        <div className={styles.homePage_sectionsRegistration__title_button}>
          <h2>5 Ознакомиться с результатами хакатона</h2>
          <div>
            <a
              href="/РЕЗУЛЬТАТЫ.doc"
              download
              style={{
                fontSize: "20px",
                color: "white",
                textDecoration: "none",
              }}
            >
              Скачать результаты
            </a>
          </div>
        </div>
        <div className={styles.homePage_sections6}>
          <HomeSections6 />
          <div style={{ marginTop: "50px" }}>
            <a
              href="/Положение Хакатон.pdf"
              download
              style={{
                fontSize: "20px",
                color: "white",
                textDecoration: "none",
              }}
            >
              Скачать положение
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
