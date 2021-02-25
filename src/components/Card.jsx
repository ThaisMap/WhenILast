import styles from "../styles/Card.module.css";
import { FaCoffee, FaPen, FaCheck } from "react-icons/fa";
import { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Card() {
  const [isEditing, setIsEditing] = useState(false);
  const [activity, setActivity] = useState({
    title: "Tomei café puro",
    date: new Date("2021-02-16 00:00"),
    comment: "Estava com sono e não tinha maçã",
  });

  function elapsedTime() {
    const msInDay = 1000 * 60 * 60 * 24;
    const today = new Date();
    const actDate = new Date(activity.date);
    const elapsed = today - actDate;

    if (elapsed < 0) return "Viajou no tempo";

    if (elapsed > msInDay) {
      const days = Math.floor(elapsed / msInDay);
      return days == 1 ? `${days} dia atrás` : `${days} dias atrás`;
    } else return "Hoje mesmo";
  }

  function handleEditingButton() {
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

  return (
    <div className={styles.container}>
      {isEditing ? (
        <form className={styles.card}>
          <div className={styles.icon}>
            <FaCoffee size={"3rem"} color={"#006e25"} />
          </div>

          <div className={styles.content}>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleTitleChange}
              defaultValue={activity.title}
            />
            <DatePicker selected={activity.date} onChange={handleDateChange} />
            <input
              type="text"
              name="comment"
              id="comment"
              defaultValue={activity.comment}
              onChange={handleCommentChange}
            />
          </div>
          <button className={styles.editButton} onClick={handleEditingButton}>
            <FaCheck size={"1em"} color={"#006e25"} />
          </button>
        </form>
      ) : (
        <article className={styles.card}>
          <div className={styles.icon}>
            <FaCoffee size={"3rem"} color={"#006e25"} />
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{activity.title}</p>
            <p className={styles.date}>
              <span> {new Date(activity.date).toLocaleDateString()}</span> -{" "}
              <span>{elapsedTime()}</span>{" "}
            </p>
            <p className={styles.comment}>{activity.comment}</p>
          </div>
          <button className={styles.editButton} onClick={handleEditingButton}>
            <FaPen size={"1em"} color={"#006e25"} />
          </button>
        </article>
      )}
    </div>
  );
}
