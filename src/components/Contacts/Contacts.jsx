import css from "./Contacts.module.css";
import ContactsList from "../ContactsList/ContactsList.jsx";
// import { BsFillTelephoneFill } from "react-icons/bs";

const Contacts = () => {
  return (
    <div className={css.contactsSection}>
      <h2>Contacts</h2>

      <ContactsList />
    </div>
  );
};

export default Contacts;
