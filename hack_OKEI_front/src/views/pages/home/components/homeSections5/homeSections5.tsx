import styles from "./homeSections5.module.css";
const HomeSections5 = () => {
  return (
    <div>
      <div className={styles.homePage_sections5__title}>
        <h2>1 Чтобы участвать - собери команду</h2>
        <span>2-4 человека</span>
        <div className={styles.homePage_sections5__title_discriptions}>
          <p>
            Они могут быть разного возраста, главное чтобы они были только в
            вашей команде
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSections5;
