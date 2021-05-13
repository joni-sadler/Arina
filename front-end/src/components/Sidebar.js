import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Vector_Teardrop from "../graphics/Vector_Teardrop.png";
import Vector_Circle from "../graphics/Vector_Circle.png";
import Vector_Oval from "../graphics/Vector_Oval.png";
import Line_Sidebar from "../graphics/Line_Sidebar.png";
import Vector_Home from "../graphics/Vector_Home.png";
import Vector_Analytics from "../graphics/Vector_Analytics.png";
import Vector_User_Account from "../graphics/Vector_User_Account.png";
import Vector_FAQ from "../graphics/Vector_FAQ.png";
import Line_Sidebar_Bottom from "../graphics/Line_Sidebar_Bottom.png";
import Vector_Exit from "../graphics/Vector_Exit.png";

const Sidebar = () => {
  return (
    <Background>
      <TopContainer>
        <TopLeftContainer>
          <Vector src={Vector_Teardrop} />
          <Vector src={Vector_Circle} />
          <Vector src={Vector_Oval} />
        </TopLeftContainer>
        <Line src={Line_Sidebar} />
        <CircleContainer>
          <Link to={`/classes`}>
            <Circle>
              <CircleVector src={Vector_Home} />
            </Circle>
          </Link>
          <Link to={`/analytics`}>
            <Circle>
              <CircleVector src={Vector_Analytics} />
            </Circle>
          </Link>
        </CircleContainer>
      </TopContainer>
      <BottomContainer>
        <CircleContainer>
          <Link to={`/user_account`}>
            <Circle>
              <CircleVector src={Vector_User_Account} />
            </Circle>
          </Link>
          <Link to={`/faq`}>
            <Circle>
              <CircleVector src={Vector_FAQ} />
            </Circle>
          </Link>
        </CircleContainer>
        <Line src={Line_Sidebar_Bottom} />
        <Vector src={Vector_Exit} />
      </BottomContainer>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  background-color: #020b30;
  width: 65px;
  height: 100vh;
  overflow-y: auto;
  color: white;
`;

const TopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Vector = styled.img`
  padding: 2px;
`;

const Line = styled.img`
  padding: 20px;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.15);
  margin: 5px;
  &:active {
    background-color: #ffffff;
    opacity: 45%;
  }
`;

const CircleVector = styled.img`
  position: absolute;
  color: #ffffff;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export default Sidebar;
