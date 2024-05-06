import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../DocumentTitle";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import { fetchContacts } from "../../redux/contacts/operations";
import BtnGoToTop from "../../components/BtnGoToTop/BtnGoToTop";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      <Toaster position="top-right" reverseOrder={false} />
      <BtnGoToTop />
    </div>
  );
};

export default ContactsPage;
