import React from "react";
import styled from "styled-components";

const Analytics = () => {
  return (
    <Container>
      <Text>ANALYTICS</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Text = styled.p`
  position: absolute;
  width: 578px;
  height: 167px;
  font-size: 56px;
  line-height: 140%;
  text-align: center;
  color: #000000;
`;

export default Analytics;
