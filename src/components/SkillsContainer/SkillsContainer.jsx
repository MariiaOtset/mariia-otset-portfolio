import css from "./SkillsContainer.module.css";

const SkillsContainer = () => {
  return (
    <div className={css.allSkillsWrapper}>
      <div>
        <h2 className={css.titleHardSkills}>Hard skills:</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <h2 className={css.titleHardSkills}>Soft skills:</h2>
      </div>
    </div>
  );
};

export default SkillsContainer;
