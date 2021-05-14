import React from "react";
import styled from "styled-components";
import Vector_Three_Dots from "../graphics/Vector_Three_Dots.png";
import Instructor from "../graphics/Instructor.png";
import Vector_Clock from "../graphics/Vector_Clock.png";
import Vector_Hybrid from "../graphics/Vector_Hybrid.png";
import Start_Class from "../graphics/Start_Class.png";

const ClassBox = () => {
  return (
    <ClassBoxContainer>
      <Header>
        <HeaderText>Your Next Class</HeaderText>
        <Vector src={Vector_Three_Dots} />
      </Header>
      <ClassInfo>
        <img src={Instructor} />
        <InstructorDate>
          <ClassName>Power Hour HIIT</ClassName>
          <ClassDetails>With Kelly Green</ClassDetails>
          <ClassDetails>TODAY, 6:00pm EST</ClassDetails>
        </InstructorDate>
      </ClassInfo>
      <DateRegistrationInfo>
        <DurationClassSize>
          <Vector src={Vector_Clock} />
          <ClassLengthSize>60 Minutes</ClassLengthSize>
        </DurationClassSize>
        <DurationClassSize>
          <Vector src={Vector_Hybrid} />
          <ClassLengthSize>12 People Registered</ClassLengthSize>
        </DurationClassSize>
      </DateRegistrationInfo>
      <BlockText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </BlockText>
      <StartClass>
        <Vector src={Start_Class} />
      </StartClass>
    </ClassBoxContainer>
  );
};

const ClassBoxContainer = styled.div`
  position: absolute;
  width: 35%;
  height: 55%;
  left: 93px;
  top: 31px;
  background: #ffffff;
  border: 1px solid #dbbcae;
  box-sizing: border-box;
  box-shadow: 6px 6px 21px rgba(0, 0, 0, 0.05);
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin: 5px;
`;

const HeaderText = styled.p`
  height: 20px;
  font-family: Kepler Std;
  font-size: 18px;
  line-height: 20px;
  text-transform: capitalize;
  color: #000000;
`;

const DateRegistrationInfo = styled.div`
  display: flex;
  margin: 15px 0px;
`;

const DurationClassSize = styled.div`
  height: 15px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 5%;
`;

const ClassName = styled.p`
  font-size: 22px;
  font-family: Kepler Std;
  margin: 0px;
  padding-bottom: 5px;
`;

const InstructorDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;
  font-weight: 400;
`;

const ClassDetails = styled.p`
  font-size: 12px;
  margin: 0px;
  padding: 2px 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ClassLengthSize = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgba(126, 93, 84, 1);
  font-size: 12px;
  font-weight: 400;
`;

const ClassInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100px;
`;

const Vector = styled.img`
  height: auto;
  width: auto;
  margin: 5px;
`;

const BlockText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
`;

const StartClass = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  margin-top: 5%;
`;

export default ClassBox;
