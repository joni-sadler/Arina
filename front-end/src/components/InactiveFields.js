import React from "react";
import styled from "styled-components";

const InactiveFields = () => {
  return (
    <div>
      <InputContainer>
        <FormText>Class Name</FormText>
        <ClassInput />
      </InputContainer>
      <HorizontalContainer>
        <InputContainer>
          <FormText>Start Date & Time</FormText>
          <Input />
        </InputContainer>
        <InputContainer>
          <FormText>Repeat</FormText>
          <Input />
        </InputContainer>
      </HorizontalContainer>

      <HorizontalContainer>
        <InputContainer>
          <FormText>Duration</FormText>
          <Input />
        </InputContainer>
        <InputContainer>
          <FormText>Price</FormText>
          <Input />
        </InputContainer>
      </HorizontalContainer>
      <HorizontalContainer>
        <FooterText>Step 1 Of 2</FooterText>
        <ButtonInactive>
          <ButtonText>Next Step</ButtonText>
        </ButtonInactive>
      </HorizontalContainer>
    </div>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const ClassInput = styled.div`
  width: 412px;
  height: 35px;
  width: 195px;
  border: 1px solid rgba(237, 237, 237, 0.6);
  box-sizing: border-box;
  border-radius: 3px;
`;

const Input = styled.div`
  height: 35px;
  width: 195px;
  border: 1px solid rgba(237, 237, 237, 0.6);
  box-sizing: border-box;
  border-radius: 3px;
`;

const FormText = styled.p`
  font-family: Pangram;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0.3125px;
  color: rgba(0, 0, 0, 0.15);
`;

const ButtonInactive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192.13px;
  height: 42.05px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
`;

const ButtonText = styled.p`
  color: white;
  font-size: 10px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
`;

const FooterText = styled.p`
  text-align: center;
`;

export default InactiveFields;
