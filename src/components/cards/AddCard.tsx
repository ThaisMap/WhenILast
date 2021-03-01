import styles from '../../styles/cards/AddCard.module.css';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import InputCard from './InputCard';

export default function AddCard() {
  const [isAdding, setIsAdding] = useState(false);
  function handleStartAdding() {
    setIsAdding(true);
  }

  function handleSaveClick(event) {
    setIsAdding(false);
  }

  return (
    <>
      <div className={styles.card}>
        {isAdding ? (
          <InputCard activity={{}} onEditClick={handleSaveClick} />
        ) : (
          <button className={styles.button} onClick={handleStartAdding}>
            <FaPlus size={'2rem'} />
          </button>
        )}
      </div>
    </>
  );
}
