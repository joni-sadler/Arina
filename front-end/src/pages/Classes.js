import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Vector_Plus from "../graphics/Vector_Plus.png";
import ClassCreationForm from "../components/ClassCreationForm";
import ClassBox from "../components/ClassBox";

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
      <div>
        <ClassBox />
      </div>
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const VectorPlusSign = styled.img`
  height: auto;
  width: auto;
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
