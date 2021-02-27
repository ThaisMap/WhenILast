import { useContext } from 'react';
import ActivitiesContext, { Activity } from '../contexts/activities';
import styles from '../styles/CardsList.module.css';
import Card from './Card';

export default function CardsList() {
  const { activities } = useContext(ActivitiesContext);

  const Cards = activities.map((act: Activity) => {
    return <Card show={act} key={act.id} />;
  });
  return <div className={styles.container}>{Cards}</div>;
}
