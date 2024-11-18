import css from "./ContactsList.module.css";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const ContactsList = () => {
  return (
    <ul className={css.iconsWrapper}>
      <li className={css.linkWrapper}>
        <a
          href="https://github.com/MariiaOtset"
          target="_blank"
          className={css.link}
        >
          <VscGithub className={css.socialsIcon} />
        </a>
      </li>
      <li className={css.linkWrapper}>
        <a
          href="www.linkedin.com/in/mariia-otset"
          target="_blank"
          className={css.link}
        >
          <FaLinkedin className={css.socialsIcon} />
        </a>
      </li>
      <li className={css.linkWrapper}>
        {/* <a href="" target="_blank" className={css.link}>
            <VscGithub className={css.socialsIcon} />
          </a> */}
      </li>
      <li className={css.linkWrapper}>
        {/* <a href="" target="_blank" className={css.link}>
            <VscGithub className={css.socialsIcon} />
          </a> */}
      </li>
    </ul>
  );
};

export default ContactsList;
