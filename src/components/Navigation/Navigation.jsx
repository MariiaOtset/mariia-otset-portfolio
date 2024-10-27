import { useState } from "react";
import css from "./Navigation.module.css";
import { RiCloseFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import { PiReadCvLogo } from "react-icons/pi";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={css.mobileNavigation}>
        <a href="#about" className={css.mobileLink}>
          My portfolio
        </a>
        <button className={css.buttons} type="button" onClick={toggleMenu}>
          <RxHamburgerMenu className={`${css.icon} ${css.iconOpenMenu}`} />
        </button>
      </div>
      <div className={`${css.container} ${isMenuOpen ? "" : css.hidden}`}>
        <button
          className={`${css.buttons} ${css.close}`}
          type="button"
          onClick={toggleMenu}
        >
          <RiCloseFill className={css.icon} />
        </button>
        <ul className={css.wrapper}>
          <li className={css.linkWrapper}>
            <a href="#about" className={css.link}>
              About me <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#skills" className={css.link}>
              Skills <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#projects" className={css.link}>
              Projects <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#education" className={css.link}>
              Education <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#contacts" className={css.link}>
              Contacts <GoArrowUpRight className={css.arrow} />
            </a>
          </li>
          <li className={css.cvLinkWrapper}>
            <a
              href="https://drive.google.com/file/d/1F9yYJmC0rAof0Y3eUA9_nUKEtrqgGjHo/view?usp=sharing"
              className={`${css.link} ${css.cvWrapper}`}
              target="_blank"
            >
              <p className={css.cv}>Download CV</p>
              <PiReadCvLogo className={css.cvIcon} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
