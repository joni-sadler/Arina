import React from "react";
import styled from "styled-components";

const FAQ = () => {
  return (
    <Container>
      <Text>Frequently Asked Questions</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #e5e5e5;
`;

const Text = styled.p`
  position: absolute;
  width: 578px;
  height: 167px;
  font-family: Pangram;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 140%;
  /* or 78px */
  text-align: center;
  color: #000000;
`;

export default FAQ;
