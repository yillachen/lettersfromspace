import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function PhotoData({ photos }) {
  console.log(`props photos: `, photos)
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      {photos.length > 0
        ? photos.map((photo, index) => {
            <div key={index}>
              <p>{photo.title}</p>
              <Image
                width="675px"
                height="675px"
                key={index}
                id={index}
                src={photo.url}
                alt={photo.title}
              />
            </div>;
          })
        : "Loading..."}
    </section>
  );
}
