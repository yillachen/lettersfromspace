import { useState, useEffect } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import PhotoData from "../components/photoData";
import { getlast9Days } from "../pages/api/ninePhotos";

export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // grab APOD data
    async function getData() {
      let response = await getlast9Days();
      response = response.filter((pic) => pic.media_type === "image");
      setPhotos(response);
    }
    getData();
    return () => "Unmounting";
  }, []);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PhotoData photos={photos} />
    </Layout>
  );
}
