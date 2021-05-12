import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return <Background>Sidebar</Background>;
};

const Background = styled.div`
  background-color: #020b30;
  width: 65px;
  height: 100vh;
  overflow-y: auto;
  color: white;
`;

export default Sidebar;
