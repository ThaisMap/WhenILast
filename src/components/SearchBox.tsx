import { FaSearch } from 'react-icons/fa';
import styles from '../styles/SearchBox.module.css';
import { useContext, useState } from 'react';
import ActivitiesContext from '../contexts/activities';
export default function SearchBox() {
  const { applyFilter } = useContext(ActivitiesContext);

  const [searchText, setSearchText] = useState('');

  function handleSearchClick() {
    applyFilter(searchText);
  }

  function handleChange(event) {
    setSearchText(event.target.value);
  }
  return (
    <div className={styles.searchBox}>
      <input
        type='text'
        name='search'
        placeholder='Pesquisar...'
        id='search'
        value={searchText}
        onChange={handleChange}
        onBlur={handleSearchClick}
      />
      <button onClick={handleSearchClick}>
        <FaSearch size={20} />
      </button>
    </div>
  );
}
