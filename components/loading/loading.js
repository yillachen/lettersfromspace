import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import SpaceLoader from "./SpaceLoader.json";

export default function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vH",
        margin: 25
      }}
    >
      <Player
        autoplay
        loop
        src={SpaceLoader}
        style={{ height: "25vH" }}
      ></Player>
    </div>
  );
}
