import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - When did I Last </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@600&family=Rajdhani:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <div className={styles.main}>
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
}
