import { Link, animateScroll as scroll } from "react-scroll";
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { BackToTop } from "../styles/styles";

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

      <BackToTop>
        <Link
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          &uarr; <br/> Back to Top
        </Link>
      </BackToTop>

      <header className={styles.header}>
        {home ? (
          <h1 id="top" className={utilStyles.heading2Xl}>
            {name}
          </h1>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
