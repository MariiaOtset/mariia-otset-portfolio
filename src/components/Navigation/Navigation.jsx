import css from "./Navigation.module.css";
import { RiCloseFill } from "react-icons/ri";

const Navigation = () => {
  return (
    <div className={css.container}>
      <button className={css.close} type="button">
        <RiCloseFill className={css.icon} />
      </button>
      <ul className={css.wrapper}>
        <li className={css.linkWrapper}>
          <a href="#about" className={css.link}>About me</a>
        </li>
        <li className={css.linkWrapper}>
          <a href="#skills" className={css.link}>Skills</a>
        </li>
        <li className={css.linkWrapper}>
          <a href="#projects" className={css.link}>Projects</a>
        </li>
        <li className={css.linkWrapper}>
          <a href="#education" className={css.link}>Education</a>
        </li>
        <li className={css.linkWrapper}>
          <a href="#contacts" className={css.link}>Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
