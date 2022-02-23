import { useState, useEffect } from "react";
import utilStyles from "../styles/utils.module.css";
import {
  PhotoWrapper,
  Photo,
  Card,
  CardTop,
  ExpandText,
} from "../styles/styles";

export default function PhotoData({ photos }) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      {photos.length !== 0
        ? photos.map((photo, index) => {
            return (
              <Card key={index}>
                <CardTop>
                  <h2>{photo.title}</h2>
                  <p>{photo.date}</p>
                </CardTop>

                <PhotoWrapper>
                  <div onMouseOver={onHover} onMouseOut={onLeave}>
                    <Photo src={photo.url} alt={photo.title} />
                    <ExpandText>{hover ? "Zoom In" : ""}</ExpandText>
                  </div>
                </PhotoWrapper>

                <p>{photo.explanation}</p>
                <h3 style={{ fontStyle: "italic", textAlign: "right" }}>
                  - {photo.copyright ? photo.copyright : "Your Secret Admirer"}
                </h3>
              </Card>
            );
          })
        : "Loading..."}
    </section>
  );
}
