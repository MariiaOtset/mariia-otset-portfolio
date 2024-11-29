import css from './Education.module.css';

const certificates = [
  {
    title: "Full Stack Developer",
    institution: "IT School GoIT",
    description: "Comprehensive course covering HTML, CSS, JavaScript, React, TypeScript and Node.js.",
    year: "2023-2024",
    imageUrl: "https://drive.google.com/file/d/14vAzjS1w7AYJUgIA9prIY5MhxtZUnhp5/view?usp=sharing",
    certLink: "https://drive.google.com/file/d/14vAzjS1w7AYJUgIA9prIY5MhxtZUnhp5/view?usp=sharing"
  },
  // {
  //   title: "React.js Advanced Concepts",
  //   institution: "Udemy",
  //   description: "In-depth study of React, including hooks, context, and performance optimization.",
  //   year: "2023-2024",
  //   imageUrl: "",
  //   certLink: ""
  // },
  // {
  //   title: "",
  //   institution: "FreeCodeCamp",
  //   description: "Complete curriculum covering front-end, back-end, and database technologies.",
  //   year: "2024",
  //   imageUrl: "",
  //   certLink: ""
  // }
];

const Education = () => {
  return <div className={css.educationSection}>
    <h2>Education</h2>
    <ul>
      {certificates.map((cert, index) => (
      
      ))}
    </ul>
  </div>;
};

export default Education;
