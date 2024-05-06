import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "./RegistrationForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (
      form.elements.password.value.length > 7 &&
      form.elements.email.value.length > 13
    ) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    } else {
      toast.error("Min length: password(7), email(13)");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <label>
        Username
        <input type="text" name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit" className={css.btn}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
