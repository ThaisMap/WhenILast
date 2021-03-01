import ElapsedTime from '../ElapsedTime';
import { FaPen } from 'react-icons/fa';
import styles from '../../styles/cards/ContentCard.module.css';

export default function ContentCard(props) {
  const { activity, onEditClick } = props;
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
      <button className={styles.editButton} onClick={onEditClick}>
        <FaPen />
      </button>
    </>
  );
}
