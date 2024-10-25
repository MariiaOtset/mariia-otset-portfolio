import css from "./Navigation.module.css";
import { RiCloseFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef } from "react";
// import clsx from 'clsx';

// const toggleClasses = clsx();

const Navigation = () => {
  const burgerMenuRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const burgerMenu = burgerMenuRef.current;
    const closeBtn = closeBtnRef.current;

    const handleClick = () => {
      if (burgerMenu) {
        burgerMenu.classList.add(css.hidden);
      }
    };

    if (closeBtn) {
      closeBtn.addEventListener("click", handleClick);
    }

    return () => {
      if (closeBtn) {
        closeBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <div className={css.mobileNavigation}>
        <a href="#about">My portfolio</a>
        <button className={css.buttons} type="button">
          <RxHamburgerMenu className={css.icon} />
        </button>
      </div>
      <div className={css.container} ref={burgerMenuRef}>
        <button
          className={`${css.buttons} ${css.close}`}
          type="button"
          ref={closeBtnRef}
        >
          <RiCloseFill className={css.icon} />
        </button>
        <ul className={css.wrapper}>
          <li className={css.linkWrapper}>
            <a href="#about" className={css.link}>
              About me
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#skills" className={css.link}>
              Skills
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#projects" className={css.link}>
              Projects
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#education" className={css.link}>
              Education
            </a>
          </li>
          <li className={css.linkWrapper}>
            <a href="#contacts" className={css.link}>
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
