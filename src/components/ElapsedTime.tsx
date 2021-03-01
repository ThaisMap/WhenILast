import styles from '../styles/ElapsedTime.module.css';

export default function ElapsedTime(props) {
  const { date } = props;
  const { prefix, suffix } = elapsedTime(date);
  return (
    <div className={styles.container}>
      <p className={styles.number}> {prefix} </p>
      <p className={styles.suffix}> {suffix} </p>
    </div>
  );
}

function elapsedTime(date) {
  const msInDay = 1000 * 60 * 60 * 24;
  const msInMonth = msInDay * 30;
  const msInYear = msInDay * 365;

  const today = new Date();
  const actDate = new Date(date);
  const elapsed = today.getTime() - actDate.getTime();

  switch (true) {
    case elapsed < 0:
      return { prefix: '-', suffix: 'no futuro' };

    case elapsed > msInYear:
      return {
        prefix: Math.floor(elapsed / msInYear),
        suffix: Math.floor(elapsed / msInYear) > 1 ? 'anos atrás' : 'ano atrás',
      };

    case elapsed > msInMonth:
      return {
        prefix: Math.floor(elapsed / msInMonth),
        suffix:
          Math.floor(elapsed / msInMonth) > 1 ? 'meses atrás' : 'mês atrás',
      };

    case elapsed > msInDay:
      return {
        prefix: Math.floor(elapsed / msInDay),
        suffix: Math.floor(elapsed / msInDay) > 1 ? 'dias atrás' : 'dia atrás',
      };
    default:
      return { prefix: '0', suffix: 'Hoje' };
  }
}
