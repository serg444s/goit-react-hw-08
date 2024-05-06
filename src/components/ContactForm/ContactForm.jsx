import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;
    dispatch(addContact({ name, number }));
    toast.success("Successfully add");
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className={css.input}
        required
      />
      <input
        type="number"
        name="number"
        placeholder="Number"
        className={css.input}
        required
      />
      <button type="submit" className={css.btn}>
        Add
      </button>
    </form>
  );
};

export default ContactForm;
