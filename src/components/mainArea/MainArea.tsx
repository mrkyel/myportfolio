import styled from "@emotion/styled";
import HomeImg from "image/home-background.jpg";

type ChildrenProps = {
  children: React.ReactNode;
};

const MainArea: React.FC<ChildrenProps> = ({ children }) => {
  return <MainAreaContainer>{children}</MainAreaContainer>;
};

export default MainArea;

const MainAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url(${HomeImg});
  background-size: cover;
`;
