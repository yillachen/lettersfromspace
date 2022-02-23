import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getlast9Days } from "./api/ninePhotos";
import Link from "next/link";
import Date from "../components/date";

export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await getlast9Days();
      response = response.filter((pic) => pic.media_type === "image");
      setPhotos(response);
      console.log(`response: `, response);
    }
    getData();
    return () => "Unmounting";
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {photos.length > 0
          ? photos.map((photo) => {
              <>
                <p>{photo.title}</p>
                <Image
                  width="675px"
                  height="675px"
                  id="myImg"
                  src={photo.url}
                  alt={photo.title}
                />
              </>;
              // photo.media_type === "image" ? (

              //   <>
              //     <p>Testing</p>
              //     <Image
              //   priority
              //   src={photo.hdurl}
              //   height={200}
              //   width={200}
              //   alt={photo.title}
              // />
              //   </>
              // ) : (
              //   "Videos are not supported yet."
              // );
            })
          : "Loading..."}
      </section>

      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}
