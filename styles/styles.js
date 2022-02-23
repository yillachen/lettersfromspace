import styled from "styled-components";

export const PhotoWrapper = styled.div`
  width: 100%;
  height: 400px;
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
  bottom: 0;
  right: 0;
  margin: 25px;
  font-size: 18px;
  text-align: right;
`;
export const Card = styled.div`
  border: 1px solid #3a0ca3;
  border-radius: 10px;
  padding: 0 25px 0 25px;
  margin: 0 0 25px 0;
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
