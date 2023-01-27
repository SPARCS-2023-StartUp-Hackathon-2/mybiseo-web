import styled from "styled-components";

const HomeBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Title = styled.div`
  color: white;
`;

export const Home = () => {
  return (
    <HomeBox>
      <Title>Home</Title>
    </HomeBox>
  );
};
