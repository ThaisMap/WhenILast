import styles from '../styles/Header.module.css';
import { FaSearch } from 'react-icons/fa';
import { useContext, useState } from 'react';
import ActivitiesContext from '../contexts/activities';

export default function Header() {
  const { applyFilter } = useContext(ActivitiesContext);

  const [searchText, setSearchText] = useState('');

  function handleSearchClick(event) {
    console.log(searchText);
    applyFilter(searchText);
  }

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <header className={styles.container}>
      <img
        src='images/sided_logo.svg'
        className={styles.title}
        alt='Quando foi que eu fiz isso?'
      />
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
    </header>
  );
}
