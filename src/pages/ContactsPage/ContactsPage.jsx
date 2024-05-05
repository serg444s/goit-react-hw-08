import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../DocumentTitle";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Contacts</DocumentTitle>
      <div>{isLoading && "Request in progress..."}</div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
