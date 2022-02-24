import { useState, useEffect } from "react";
import utilStyles from "../styles/utils.module.css";
import {
  PhotoWrapper,
  Photo,
  Card,
  CardTop,
  ExpandText,
  Feed,
  Video,
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
    <Feed>
      {photos.length !== 0 ? (
        photos.map((photo, index) => {
          return (
            <Card key={index}>
              <CardTop>
                <h2>{photo.title}</h2>
                <p>{photo.date}</p>
              </CardTop>

              {photo.media_type === "image" ? (
                <PhotoWrapper>
                  <div onMouseOver={onHover} onMouseOut={onLeave}>
                    <Photo src={photo.url} alt={photo.title} />
                    <ExpandText>{hover ? "Zoom In" : ""}</ExpandText>
                  </div>
                </PhotoWrapper>
              ) : (
                <Video>
                  <iframe
                    src={photo.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; gyroscope;"
                    title={photo.title}
                  />
                </Video>
              )}

              <p>{photo.explanation}</p>
              <h3 style={{ fontStyle: "italic", textAlign: "right" }}>
                - {photo.copyright ? photo.copyright : "A Secret Admirer"}
              </h3>
            </Card>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </Feed>
  );
}
