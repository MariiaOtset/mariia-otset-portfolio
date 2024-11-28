import css from "./MyProjects.module.css";
import ProjectItem from "../ProjectItem/ProjectItem.jsx";

const projectsData = [
  {
    image: "/src/images/game-landing.jpg",
    title: "Game Landing Page",
    description: "An interactive landing page for a mobile match-3 game. I was responsible for developing the Gallery, How to Play, Game Video sections, as well as the Privacy Policy page. Commercial team project",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vitayusko.github.io/Puppy-Diary-Epic-Match-3/",
    githubLink: "https://github.com/vitayusko/Puppy-Diary-Epic-Match-3"
  },
];

const MyProjects = () => {
  return (
    <div className={css.projectsSectionWrapper}>
      <h2 className={css.sectionTitle}>My Projects</h2>
      <ul className={css.projectsList}>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} {...project}/>
        ))}
      </ul>
    </div>
  );
};

export default MyProjects;
