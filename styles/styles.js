import styled from "styled-components";
import letterBg from "../public/images/letterBg.png";

export const PhotoWrapper = styled.div`
  width: 100%;
  max-height: 400px;
  position: relative;
  overflow: hidden;
`;

export const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50%;
  opacity: 1;
  transition: 0.25s;

  &:hover {
    opacity: 0.75;
  }
`;

export const BackToTop = styled.div`
  position: fixed;
  bottom: 50%;
  right: 0;
  margin: 25px;
  font-size: 18px;
  text-align: right;
`;

export const BackToBottom = styled.div`
  position: fixed;
  bottom: 40%;
  right: 0;
  margin: 25px;
  font-size: 18px;
  text-align: right;
`;

export const Card = styled.div`
  background-image: url(${letterBg});
  background-color: #fff;
  border-radius: 10px;
  padding: 0 25px 0 25px;
  margin: 25px;
  box-shadow: 2px 2px 15px #390ca33b;
  width: 500px;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExpandText = styled.div`
  font-size: 80px;
  color: white;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  margin: auto;
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

export const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
