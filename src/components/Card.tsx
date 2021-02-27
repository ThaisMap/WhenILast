import styles from '../styles/Card.module.css';
import ElapsedTime from './ElapsedTime';
import { FaCoffee, FaPen, FaCheck } from 'react-icons/fa';
import { useContext, useState } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import ActivitiesContext, { Activity } from '../contexts/activities';

export default function Card(props: { show: Activity }) {
  const { show } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [activity, setActivity] = useState(show);

  const { change } = useContext(ActivitiesContext);

  function handleEditingButton() {
    if (isEditing) {
      change(activity);
    }

    setIsEditing(!isEditing);
  }

  function handleDateChange(selected) {
    setActivity({
      ...activity,
      date: selected,
    });
  }

  function handleCommentChange(event) {
    setActivity({
      ...activity,
      comment: event.target.value,
    });
  }

  function handleTitleChange(event) {
    setActivity({
      ...activity,
      title: event.target.value,
    });
  }

  const normal = () => {
    return (
      <article className={styles.card}>
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
        <button className={styles.editButton} onClick={handleEditingButton}>
          <FaPen size={'1em'} color={'#006e25'} />
        </button>
      </article>
    );
  };

  const editing = () => {
    return (
      <article className={styles.card}>
        <div className={styles.icon}>
          <ElapsedTime />
        </div>

        <div className={styles.content}>
          <input
            type='text'
            name='title'
            id='title'
            onChange={handleTitleChange}
            defaultValue={activity.title}
          />
          <DatePicker selected={activity.date} onChange={handleDateChange} />
          <input
            type='text'
            name='comment'
            id='comment'
            defaultValue={activity.comment}
            onChange={handleCommentChange}
          />
        </div>
        <button className={styles.editButton} onClick={handleEditingButton}>
          <FaCheck size={'1em'} color={'#006e25'} />
        </button>
      </article>
    );
  };

  return (
    <div className={styles.container}>{isEditing ? editing() : normal()}</div>
  );
}
