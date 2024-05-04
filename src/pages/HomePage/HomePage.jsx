import DocumentTitle from "../../DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <DocumentTitle>Home</DocumentTitle>
      <h2 className={css.title}>Welcome!</h2>
    </div>
  );
};

export default HomePage;
