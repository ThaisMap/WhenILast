import { FaSortUp, FaSortDown } from 'react-icons/fa';
import styles from '../styles/SortButton.module.css';

import { useContext, useState } from 'react';
import ActivitiesContext from '../contexts/activities';

export default function SortButton() {
  const { sort } = useContext(ActivitiesContext);
  const [closestToFarther, setClosestToFarther] = useState(true);
  function handleSortClick() {
    sort(closestToFarther);
    setClosestToFarther(!closestToFarther);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleSortClick}>
        {/* {closestToFarther ? <FaSortUp size={20} /> : <FaSortDown size={20} />} */}
        {closestToFarther ? (
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
