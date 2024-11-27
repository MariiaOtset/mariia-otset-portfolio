import css from "./ProjectItem.module.css";

const ProjectItem = () => {
  return (
    <div>
      <li className={css.projectItem}>
        <img
          src="/src/images/game-landing.jpg"
          alt="Game landing page"
          loading="lazy"
          className={css.projectImage}
        />
        <div className={css.projectInfoContainer}>
          <h3 className={css.projectTitle}>yftyfd</h3>
          <p className={css.projectDescription}>zszsx</p>
          <ul className={css.projectTechList}>
            <li className={css.projectTechItems}>kko</li>
            <li className={css.projectTechItems}>jbkj</li>
            <li className={css.projectTechItems}>jbjk</li>
            <li className={css.projectTechItems}>ljlk</li>
          </ul>

          <div>
            <a href="" className={css.livePageLink}></a>
            <a href="" className={css.githubLink}></a>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ProjectItem;
