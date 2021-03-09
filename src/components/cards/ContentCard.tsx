import ElapsedTime from '../ElapsedTime';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import styles from '../../styles/cards/ContentCard.module.css';
import { useContext } from 'react';
import ActivitiesContext from '../../contexts/activities';

export default function ContentCard(props) {
  const { activity, onEditClick } = props;

  const { remove } = useContext(ActivitiesContext);

  function handleDeleteClick() {
    remove(activity);
  }

  return (
    <>
      <div className={styles.icon}>
        <ElapsedTime date={activity.date} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{activity.title}</p>
        <p className={styles.date}>
          <span> {new Date(activity.date).toLocaleDateString()}</span>
        </p>
        <p className={styles.comment}>{activity.comment}</p>
      </div>
      <div className={styles.iconButtons}>
        <button className={styles.editButton} onClick={onEditClick}>
          <FaPen />
        </button>
        <button className={styles.editButton} onClick={handleDeleteClick}>
          <FaTrashAlt />
        </button>
      </div>
    </>
  );
}
