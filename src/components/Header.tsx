import styles from '../styles/Header.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
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
        />
        <button>
          {' '}
          <FaSearch size={20} />{' '}
        </button>
      </div>
    </header>
  );
}
