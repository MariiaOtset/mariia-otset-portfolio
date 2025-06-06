import ContactsList from "../ContactsList/ContactsList.jsx";
import TypingAnimation from "../TypingAnimation/TypingAnimation.jsx";
import css from "./AboutMe.module.css";
import { useState, useEffect } from "react";

const AboutMe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={css.sectionWrapper} id="about">
      <div className={css.leftSideWrapper}>
        {windowWidth >= 768 && <TypingAnimation />}
        {windowWidth >= 768 && (
          <div>
            <p className={css.textContacts}>Let&apos;s get in touch:</p>
            <ContactsList />
          </div>
        )}
      </div>

      <div className={css.aboutWrapper}>
        <h1 className={css.mainTitle}>
          <span className={css.hello}>Hello,</span>
          <span className={css.fullName}>I&apos;m Mariia Otset</span>
        </h1>
        <h2 className={css.jobTitle}>Full Stack Developer</h2>
        {windowWidth < 768 && <TypingAnimation />}
        <h2 className={css.aboutTitle}>About me</h2>
        <p className={css.aboutText}>
          Over a year ago, I started learning full-stack web development. My
          favorite part of programming is the problem-solving aspect. <br /> I
          love the feeling of finally finding a solution to a problem.
        </p>
        <p className={css.aboutText}>
          I am always looking for new challenges and opportunities to contribute
          to the success of projects as a full-stack developer.
        </p>
        <p className={css.aboutText}>
          When I am not coding, I enjoy reading or watching videos about
          history, watching movies, and riding my bike. I also enjoy learning
          new things.
        </p>
        {windowWidth < 768 && (
          <div>
            <p className={css.textContacts}>Let&apos;s get in touch:</p>
            <ContactsList />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
