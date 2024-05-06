import { Toaster } from "react-hot-toast";
import DocumentTitle from "../../DocumentTitle";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";

const RegisterPage = () => {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default RegisterPage;
