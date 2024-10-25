import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Education from "./components/Education/Education.jsx";
import MyProjects from "./components/MyProjects/MyProjects.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer.jsx";

function App() {
  return (
    <>
      <Navigation />
      <AboutMe />
      <SkillsContainer />
      <MyProjects />
      <Education />
      <Contacts />
    </>
  );
}

export default App;
