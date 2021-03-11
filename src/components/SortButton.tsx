import { FaSortUp, FaSortDown } from 'react-icons/fa';
import styles from '../styles/SortButton.module.css';

import { useContext, useState } from 'react';
import ActivitiesContext from '../contexts/activities';

export default function SortButton() {
  const { sort } = useContext(ActivitiesContext);
  //começa do mais recente primeiro
  const [oldestToNewest, setOldestToNewest] = useState(false);
  function handleSortClick() {
    sort(oldestToNewest);
    setOldestToNewest(!oldestToNewest);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleSortClick}>
        {/* {oldestToNewest ? <FaSortUp size={20} /> : <FaSortDown size={20} />} */}
        {oldestToNewest ? (
          <p>
            recentes <FaSortUp size={20} />
          </p>
        ) : (
          <p>
            antigos <FaSortDown size={20} />
          </p>
        )}
      </button>
    </div>
  );
}
