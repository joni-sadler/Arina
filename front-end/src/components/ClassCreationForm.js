import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import Vector_Virtual_Class from "../graphics/Vector_Virtual_Class.png";
import Vector_Lightning from "../graphics/Vector_Lightning.png";
import Vector_Hybrid from "../graphics/Vector_Hybrid.png";
import BackToClassManagement from "../graphics/BackToClassManagement.png";
import BackToStep1 from "../graphics/BackToStep1.png";
import InactiveFields from "../components/InactiveFields";

const ClassCreationForm = ({ onCloseModal }) => {
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [classType, setClassType] = useState();

  const nextStep = () => {
    setShowStepTwo(true);
  };

  const backToStepOne = () => {
    setShowStepTwo(false);
  };

  const formik = useFormik({
    initialValues: {
      className: "",
      startDateTime: "",
      repeat: "None",
      duration: "",
      price: "",
      classDescription: "",
      whiteBoard: "",
    },
    onSubmit: (values) => {
      values["classType"] = classType;
      console.log(values);
    },
  });
  return (
    // <form onSubmit={formik.handleSubmit}>
    <form>
      {!showStepTwo ? (
        <div>
          <Back onClick={onCloseModal}>
            <img src={BackToClassManagement} />
          </Back>
          <CreateClass>
            <CreateDetailedClass>Create Detailed Class</CreateDetailedClass>
            <CreateClassTemplateContainer>
              <CreateClassTemplate>Create Class Template</CreateClassTemplate>
              <Toggle>
                <ToggleCircle />
              </Toggle>
            </CreateClassTemplateContainer>
          </CreateClass>
          <ClassType>
            <p>Class Type</p>

            <Rectangle
              active={classType == "Virtual Class"}
              onClick={() => setClassType("Virtual Class")}
            >
              <Circle>
                <Vector src={Vector_Virtual_Class} />
              </Circle>
              <RectangleTextContainer>
                <ClassTypeHeader>Virtual Class</ClassTypeHeader>
                <ClassTypeDescription>
                  Will be hosted online on ARINA Live
                </ClassTypeDescription>
              </RectangleTextContainer>
            </Rectangle>
            <Rectangle
              active={classType == "In Person Class"}
              onClick={() => setClassType("In Person Class")}
            >
              <Circle>
                <Vector src={Vector_Lightning} />
              </Circle>
              <RectangleTextContainer>
                <ClassTypeHeader>In Person Class</ClassTypeHeader>
                <ClassTypeDescription>
                  Will be hosted in person
                </ClassTypeDescription>
              </RectangleTextContainer>
            </Rectangle>
            <Rectangle
              active={classType == "Hybrid Class"}
              onClick={() => setClassType("Hybrid Class")}
            >
              <Circle>
                <Vector src={Vector_Hybrid} />
              </Circle>
              <RectangleTextContainer>
                <ClassTypeHeader>Hybrid Class</ClassTypeHeader>
                <ClassTypeDescription>
                  Will be hosted both virtually and in person simultaneously
                </ClassTypeDescription>
              </RectangleTextContainer>
            </Rectangle>
          </ClassType>
          {classType ? (
            <div>
              <InputContainer>
                <FormText>Class Name</FormText>
                <Input
                  id="className"
                  name="className"
                  type="className"
                  onChange={formik.handleChange}
                  value={formik.values.className}
                />
              </InputContainer>
              <HorizontalContainer>
                <InputContainer>
                  <FormText>Start Date & Time</FormText>
                  <Input
                    id="startDateTime"
                    name="startDateTime"
                    type="startDateTime"
                    onChange={formik.handleChange}
                    value={formik.values.startDateTime}
                  />
                </InputContainer>
                <InputContainer>
                  <FormText>Repeat</FormText>
                  <Input
                    id="repeat"
                    name="repeat"
                    type="repeat"
                    onChange={formik.handleChange}
                    value={formik.values.repeat}
                  />
                </InputContainer>
              </HorizontalContainer>

              <HorizontalContainer>
                <InputContainer>
                  <FormText>Duration</FormText>
                  <Input
                    id="duration"
                    name="duration"
                    type="duration"
                    onChange={formik.handleChange}
                    value={formik.values.duration}
                  />
                </InputContainer>
                <InputContainer>
                  <FormText>Price</FormText>
                  <Input
                    id="price"
                    name="price"
                    type="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                  />
                </InputContainer>
              </HorizontalContainer>
            </div>
          ) : (
            <InactiveFields />
          )}

          <HorizontalContainer>
            <FooterText>Step 1 Of 2</FooterText>
            <Button onClick={() => nextStep()} type="button">
              <ButtonText>Next Step</ButtonText>
            </Button>
          </HorizontalContainer>
        </div>
      ) : (
        <SecondPageContainer>
          <div>
            <Back onClick={backToStepOne}>
              <img src={BackToStep1} />
            </Back>
            <CreateDetailedClass>Create Detailed Class</CreateDetailedClass>
            <ClassType>
              <p>Class Description</p>
              <ClassDescriptionInput
                id="classDescription"
                name="classDescription"
                type="classDescription"
                onChange={formik.handleChange}
                value={formik.values.classDescription}
              />

              <p>Whiteboard</p>
              <WhiteboardInput
                id="Whiteboard"
                name="Whiteboard"
                type="Whiteboard"
                onChange={formik.handleChange}
                value={formik.values.whiteboard}
              />
            </ClassType>
          </div>
          <div>
            <HorizontalContainer>
              <FormText>Step 2 Of 2</FormText>
              <Button onClick={formik.handleSubmit} type="submit">
                <ButtonText>Create Class</ButtonText>
              </Button>
            </HorizontalContainer>
          </div>
        </SecondPageContainer>
      )}
    </form>
  );
};

const Back = styled.div`
  cursor: pointer;
`;

const CreateClass = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CreateDetailedClass = styled.p`
  /* Widget Heading */

  font-family: Kepler Std;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */
  text-transform: capitalize;
  color: #000000;
`;

const CreateClassTemplateContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CreateClassTemplate = styled.p`
  font-family: Pangram;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  margin: 20px;
  /* identical to box height, or 200% */

  text-align: center;
  text-transform: capitalize;
  color: #000000;
  opacity: 0.35;
`;

const Toggle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 14px;
  width: 25px;
  border: 1px solid #dad2cb;
  border-radius: 100px;
`;

const ToggleCircle = styled.div`
  background-color: #dad2cb;
  border-radius: 50%;
  height: 12px;
  width: 12px;
  margin: 1px;
`;

const ClassType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Rectangle = styled.div`
  width: 414px;
  height: 64.81px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dad2cb;
  box-sizing: border-box;
  border-radius: 3px;
  margin: 10px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    background-color: rgba(218, 210, 203, 0.15);
  `}
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 41px;
  width: 41px;
  background: rgba(218, 210, 203, 0.15);
  margin: 10px;
`;

const Vector = styled.img`
  height: auto;
  width: auto;
`;

const RectangleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassTypeHeader = styled.p`
  font-family: Pangram;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.3125px;
  color: #000000;
  padding: 2px;
  margin: 0px;
`;

const ClassTypeDescription = styled.p`
  font-family: Pangram;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0.3125px;
  color: rgba(0, 0, 0, 0.65);
  padding: 2px;
  margin: 0px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Input = styled.input`
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
  /* identical to box height, or 10px */
  letter-spacing: 0.3125px;
  color: rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
  width: 192.13px;
  height: 42.05px;
  background: #000000;
  border: none;
`;

const ButtonText = styled.p`
  color: white;
  font-size: 10px;
`;

const SecondPageContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const ClassDescriptionInput = styled.input`
  width: 412px;
  height: 75.12px;
  background: #ffffff;
  border: 1px solid rgba(218, 210, 203, 0.6);
  box-sizing: border-box;
  border-radius: 3px;
`;

const WhiteboardInput = styled.input`
  width: 244.83px;
  height: 82.97px;
  background: #ffffff;
  border: 1px solid rgba(218, 210, 203, 0.6);
  box-sizing: border-box;
  border-radius: 3px;
`;

const FooterText = styled.p`
  text-align: center;
`;

export default ClassCreationForm;
