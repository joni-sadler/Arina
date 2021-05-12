import React from "react";
import styled from "styled-components";
import Vector_Three_Dots from "../graphics/Vector_Three_Dots.png";

const Home = () => {
  return (
    <Container>
      <ClassBox>
        <Header>
          <HeaderText>Your Next Class</HeaderText>
          <Vector src={Vector_Three_Dots} />
        </Header>
      </ClassBox>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const ClassBox = styled.div`
  position: absolute;
  width: 331px;
  height: 326px;
  left: 93px;
  top: 31px;
  background: #ffffff;
  border: 1px solid #dbbcae;
  box-sizing: border-box;
  box-shadow: 6px 6px 21px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const HeaderText = styled.p`
  position: absolute;
  /* width: 106px; */
  height: 20px;
  /* left: 106px;
  top: 44px; */
  font-family: Kepler Std;
  font-size: 18px;
  line-height: 20px;
  text-transform: capitalize;
  color: #000000;
`;

const Vector = styled.img`
  height: 3px;
  width: 13px;
`;

export default Home;
