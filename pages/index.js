import { useState, useEffect } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import PhotoData from "../components/photoData";
import { getlast9Days } from "../pages/api/ninePhotos";
import Loading from "../components/loading/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await getlast9Days();
      response = response.filter((pic) => pic.media_type === "image");
      setPhotos(response);
    }
    getData();

    const delay = () => {
      setTimeout(() => setLoading(false), 2000);
    };
    delay();

    return () => "Unmounting";
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PhotoData photos={photos} />
    </Layout>
  );
}
