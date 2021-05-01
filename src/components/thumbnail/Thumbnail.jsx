import styled from "@emotion/styled";
import React from "react";
import ProfileImage from "image/profile-image.jpg";

function Thumbnail() {
  return (
    <>
      <ThumbnailArea />
      <TextStyle>Web Developer</TextStyle>
      <TextStyle>김한결</TextStyle>
    </>
  );
}

export default Thumbnail;

const ThumbnailArea = styled.div`
  margin: 3rem;
  border: 1px solid gray;
  border-radius: 8rem;
  width: 16rem;
  height: 17rem;
  background-image: url(${ProfileImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
const TextStyle = styled.div`
  font-size: 2rem;
  color: white;
  margin: 0.5rem;
`;
