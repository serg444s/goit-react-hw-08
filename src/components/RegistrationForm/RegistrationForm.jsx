import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.elements.password.value.length > 6) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    } else {
      toast.error("Minimum password length (7)");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
