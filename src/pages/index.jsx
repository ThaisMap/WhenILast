import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home - Quando foi que eu fiz? </title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="images/icone.png" type="image/png" />
        </Head>

        <Header />

        <div className={styles.main}>
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}
