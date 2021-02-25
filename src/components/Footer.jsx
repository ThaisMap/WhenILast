import styles from "../styles/Footer.module.css";


export default function Footer(){
     return (
        <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/thais-maria-pinto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            Criado por <strong> ThaisMap</strong>
          </span>
        </a>
      </footer>
     )
}