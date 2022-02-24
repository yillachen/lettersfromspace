import { Link, animateScroll as scroll } from "react-scroll";
import Head from "next/head";
import styles from "./layout.module.css";
import { BackToTop, BackToBottom } from "../styles/styles";

// create a navbar up top that has the title and options for likes, and login components via firebase to hold onto the data. scrollToTop with the title. scrollToBottom for credits.

const name = "Letters from Space";
export const siteTitle = "Letters from Space";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="NASA Open API Astrology Pic of the Day into Love Letters"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? <h1>{name}</h1> : <h1>{name}</h1>}
      </header>

      {children}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <BackToTop>
        <Link
          onClick={scroll.scrollToTop}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to=""
        >
          &uarr; <br /> Go to Top
        </Link>
      </BackToTop>
      <BackToBottom>
        <Link
          onClick={scroll.scrollToBottom}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to=""
        >
          Go to End <br /> &darr;
        </Link>
      </BackToBottom>
    </div>
  );
}
