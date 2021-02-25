import styles from "../styles/Card.module.css";
import { FaCoffee } from 'react-icons/fa'

export default function Card(){
     return (
        <div className={styles.container}>
            <article className={styles.card}>
                <FaCoffee size={36} color={'#006e25'} />
                <div>
                    <p>Tomei café puro</p>
                    <p><span>10/02/2021</span> - <span>14 dias</span> atrás</p>
                    <p>Estava com sono e não tinha maçã</p>
                </div>
            </article>
        </div>
     )
}