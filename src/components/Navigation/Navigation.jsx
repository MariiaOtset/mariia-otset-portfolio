import css from "./Navigation.module.css";

const Navigation = () => {
  return (
      <ul className={css.container}>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
  );
};

export default Navigation;
