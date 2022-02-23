import utilStyles from "../styles/utils.module.css";
import { Photo } from "../styles/styles";

export default function PhotoData({ photos }) {
  console.log(`props photos: `, photos);
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      {photos.length !== 0
        ? photos.map((photo, index) => {
            return (
              <div key={index}>
                <p>{photo.title}</p>
                <Photo src={photo.url} alt={photo.title} />
              </div>
            );
          })
        : "Loading..."}
    </section>
  );
}
