import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { isLoggedIn } = useSelector();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
