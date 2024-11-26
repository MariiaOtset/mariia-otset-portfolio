import css from "./MyProjects.module.css";

const MyProjects = () => {
  return (
    <div className={css.projectsSectionWrapper}>
      <h2 className={css.sectionTitle}>My Projects</h2>
      <ul className={css.projectsList}>
        <li className={css.projectItem}>
          {/* <img
            src="../../images/project-1.png"
            alt="Game landing page"
            loading="lazy"
            className={css.projectImage}
          /> */}
          <div></div>
        </li>
        <li className={css.projectItem}></li>
        <li className={css.projectItem}></li>
        <li className={css.projectItem}></li>
        <li className={css.projectItem}></li>
        <li className={css.projectItem}></li>
        <li className={css.projectItem}></li>
      </ul>
    </div>
  );
};

export default MyProjects;
