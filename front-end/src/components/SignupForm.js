import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import Vector_Virtual_Class from "../graphics/Vector_Virtual_Class.png";
import Vector_Lightning from "../graphics/Vector_Lightning.png";
import Vector_Hybrid from "../graphics/Vector_Hybrid.png";

const SignupForm = () => {
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
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <CreateClass>
        <CreateDetailedClass>Create Detailed Class</CreateDetailedClass>
        <CreateClassTemplate>Create Class Template</CreateClassTemplate>
      </CreateClass>
      <ClassType>
        <p>Class Type</p>
        <Rectangle>
          <Circle>
            <Vector src={Vector_Virtual_Class} />
          </Circle>
          <RectangleTextContainer>
            <p>Virtual Class</p>
            <p>Will be hosted online on ARINA Live</p>
          </RectangleTextContainer>
        </Rectangle>
        <Rectangle>
          <Circle>
            <Vector src={Vector_Lightning} />
          </Circle>
          <RectangleTextContainer>
            <p>In Person Class</p>
            <p>Will be hosted in person</p>
          </RectangleTextContainer>
        </Rectangle>
        <Rectangle>
          <Circle>
            <Vector src={Vector_Hybrid} />
          </Circle>
          <RectangleTextContainer>
            <p>Hybrid Class</p>
            <p>Will be hosted both virtually and in person simultaneously</p>
          </RectangleTextContainer>
        </Rectangle>
      </ClassType>

      <InputContainer>
        <FormText>Class Name</FormText>
        <input
          id="className"
          name="className"
          type="classNme"
          onChange={formik.handleChange}
          value={formik.values.className}
        />
      </InputContainer>
      <HorizontalContainer>
        <InputContainer>
          <FormText>Start Date & Time</FormText>
          <input
            id="startDateTime"
            name="startDateTime"
            type="startDateTime"
            onChange={formik.handleChange}
            value={formik.values.startDateTime}
          />
        </InputContainer>
        <InputContainer>
          <FormText>Repeat</FormText>
          <input
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
          <input
            id="duration"
            name="duration"
            type="duration"
            onChange={formik.handleChange}
            value={formik.values.duration}
          />
        </InputContainer>
        <InputContainer>
          <FormText>Price</FormText>
          <input
            id="price"
            name="price"
            type="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </InputContainer>
      </HorizontalContainer>

      <HorizontalContainer>
        <FormText>Step 1 Of 2</FormText>
        <button>Next Step</button>
      </HorizontalContainer>
    </form>
  );
};

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

const CreateClassTemplate = styled.p`
  font-family: Pangram;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 200% */

  text-align: center;
  text-transform: capitalize;
  color: #000000;
  opacity: 0.35;
`;

const ClassType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Rectangle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dad2cb;
  box-sizing: border-box;
  border-radius: 3px;
  margin: 10px;
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
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

const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SignupForm;
