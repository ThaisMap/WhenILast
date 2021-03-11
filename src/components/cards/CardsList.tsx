import { useContext, useEffect } from 'react';
import ActivitiesContext, { Activity } from '../../contexts/activities';
import styles from '../../styles/cards/CardsList.module.css';
import AddCard from './AddCard';
import Card from './Card';

export default function CardsList() {
  const { activities, sort } = useContext(ActivitiesContext);
  useEffect(() => {
    sort(true);
  }, []);
  const Cards = activities.map((act: Activity) => {
    if (act.visible) {
      return <Card show={act} key={act.id} />;
    }
  });
  return (
    <div className={styles.container}>
      <AddCard />
      {Cards}
    </div>
  );
}
