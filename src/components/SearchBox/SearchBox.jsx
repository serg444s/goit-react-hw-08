import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find contact"
        value={currentFilter}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
