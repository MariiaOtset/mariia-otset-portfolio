import css from "./Contacts.module.css";
import ContactsList from "../ContactsList/ContactsList.jsx";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
// import { MdOutlineMail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
// import { MdOutlineEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <div className={css.contactsSection}>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <ul className={css.contactsList}>
        <li className={css.contactsItem}>
          <BsTelephoneFill className={`${css.contactsIcon} ${css.phoneIcon}`} />
          <a href="tell:+447391727924" className={css.contactsLink}>
            +44 739 172 79 24
          </a>
        </li>
        <li className={css.contactsItem}>
          <HiOutlineMail className={`${css.contactsIcon} ${css.emailIcon}`} />
          <a href="mailto:mariiaotset@gmail.com" className={css.contactsLink}>
            mariiaotset@gmail.com
          </a>
        </li>
        <li className={css.contactsItem}>
          <IoLocationSharp
            className={`${css.contactsIcon} ${css.locationIcon}`}
          />
          <p>Darlington, United Kingdom</p>
        </li>
      </ul>
      <ContactsList />
    </div>
  );
};

export default Contacts;
