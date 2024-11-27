import css from "./MyProjects.module.css";
import ProjectItem from "../ProjectItem/ProjectItem.jsx";

const MyProjects = () => {
  return (
    <div className={css.projectsSectionWrapper}>
      <h2 className={css.sectionTitle}>My Projects</h2>
      <ul className={css.projectsList}>
        {
          <ProjectItem />
       }
      </ul>
    </div>
  );
};

export default MyProjects;
