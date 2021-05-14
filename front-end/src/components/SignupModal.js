import React, { useState } from "react";
import Modal from "react-modal";
import SignupForm from "./ClassCreationForm";

const SignupModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const setModalOpenToTrue = () => {
    setModalOpen(true);
  };

  const setModalOpenToFalse = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Modal isOpen={modalOpen}>
        <SignupForm />
      </Modal>
    </div>
  );
};

export default SignupModal;
