import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Vector_Three_Dots from "../graphics/Vector_Three_Dots.png";
import Vector_Plus from "../graphics/Vector_Plus.png";
import ClassCreationForm from "../components/ClassCreationForm";

const Classes = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("modal open");
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("modal closed");
    setIsOpen(false);
  };

  return (
    <Container>
      <TopSection>
        <ClassBox>
          <Header>
            <HeaderText>Your Next Class</HeaderText>
            <Vector src={Vector_Three_Dots} />
          </Header>
        </ClassBox>
      </TopSection>
      <BottomSection>
        <AddClassCircle onClick={openModal}>
          <VectorPlusSign src={Vector_Plus} />
        </AddClassCircle>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          ariaHideApp={false}
          onRequestClose={closeModal}
        >
          {/* <button onClick={closeModal}>Back to Class Management</button> */}
          <ClassCreationForm onCloseModal={closeModal} />
        </Modal>
      </BottomSection>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  background-color: #e5e5e5;
`;

const TopSection = styled.div``;

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
  align-items: flex-start;
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

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const AddClassCircle = styled.div`
  height: 72px;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
  border-radius: 50%;
  background-color: #020b30;
  cursor: pointer;
`;

const VectorPlusSign = styled.img`
  height: 14px;
  width: 14px;
`;

const customStyles = {
  content: {
    position: "absolute",
    width: "450px",
    height: "90%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default Classes;
