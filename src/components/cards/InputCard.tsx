import ElapsedTime from '../ElapsedTime';
import { FaCheck } from 'react-icons/fa';
import styles from '../../styles/cards/InputCard.module.css';
import { useContext, useState } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import ActivitiesContext from '../../contexts/activities';

export default function InputCard(props) {
  const { addOrUpdate } = useContext(ActivitiesContext);
  const { onEditClick } = props;
  const [activity, setActivity] = useState(props.activity);

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

  function handleSaveClick() {
    addOrUpdate(activity);
    onEditClick(activity);
  }

  return (
    <>
      <div className={styles.content}>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Título da Atividade'
          onChange={handleTitleChange}
          defaultValue={activity.title}
        />
        <DatePicker
          selected={activity.date}
          locale='pt-BR'
          placeholderText='Quando foi'
          dateFormat='dd/MM/yyyy'
          onChange={handleDateChange}
        />
        <input
          type='text'
          name='comment'
          id='comment'
          placeholder='Comentários'
          defaultValue={activity.comment}
          onChange={handleCommentChange}
        />
      </div>
      <button className={styles.saveButton} onClick={handleSaveClick}>
        <FaCheck />
      </button>
    </>
  );
}
