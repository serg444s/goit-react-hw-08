import ContactList from "../ContactList/ContactList";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import { selectError, selectIsLoading } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import BtnGoToTop from "../BtnGoToTop/BtnGoToTop";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="title">My phonebook</h1>

      <div className="container">
        <div className="phone">
          <div>
            <ContactForm />
            <SearchBox />
            <ContactList />
            {isLoading && <Loader />}
            {error && <ErrorMessage />}
            <BtnGoToTop />
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </>
  );
}

export default App;
