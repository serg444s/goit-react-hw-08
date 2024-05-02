import { FaPhone, FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.container}>
      <div className={css.name}>
        <p className={css.text}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.text}>
          <FaPhone />
          {contact.number}
        </p>
      </div>
      <button type="button" onClick={handleDelete} className={css.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
