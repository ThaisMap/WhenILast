import styles from '../../styles/cards/Card.module.css';
import { useState } from 'react';
import { Activity } from '../../contexts/activities';
import ContentCard from './ContentCard';
import InputCard from './InputCard';

export default function Card(props: { show: Activity }) {
  const { show } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [activity, setActivity] = useState<Activity>(show);

  function handleStartEditing() {
    setIsEditing(true);
  }

  function handleSaveClick(changedActivity: Activity) {
    setActivity(changedActivity);
    setIsEditing(false);
  }

  return (
    <article className={styles.card}>
      {isEditing ? (
        <InputCard activity={activity} onEditClick={handleSaveClick} />
      ) : (
        <ContentCard activity={activity} onEditClick={handleStartEditing} />
      )}
    </article>
  );
}
