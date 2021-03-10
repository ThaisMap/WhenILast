import styles from '../styles/Header.module.css';

import SortButton from './SortButton';
import SearchBox from './SearchBox';

export default function Header() {
  return (
    <header className={styles.container}>
      <img
        src='images/sided_logo.svg'
        className={styles.title}
        alt='Quando foi que eu fiz isso?'
      />
      <div className={styles.actions}>
        <SearchBox />
        <SortButton />
      </div>
    </header>
  );
}
