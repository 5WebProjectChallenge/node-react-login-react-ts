import React from "react";
import { v4 as uuidv4 } from "uuid";

import CustomButton from "../Buttons";
import Input from "../Input";
import JumboContainer from "../Jumbotron";

// import "./styles.css";
interface InputFields {
  label: string;
  type: string;
  value: string | undefined;
  key: string;
  handleOnChange: any;
}

interface Props {
  btnText: string;
  inputFields: InputFields[];
  height: string;
  heading: string;
  onSubmitBtnClick: any;
  isLoading:boolean
}

const Form: React.FC<Props> = ({
  btnText,
  onSubmitBtnClick,
  inputFields,
  height,
  heading,
  isLoading
}) => {
  return (
    <JumboContainer height={height} bg="transparent" flexDirection="column">
      <h1>{heading}</h1>
      {inputFields && inputFields.map((field) => <Input {...field} />)}
      <CustomButton
        type="primary"
        padding="12px 30px"
        isLoading={isLoading}
        handeOnClick={onSubmitBtnClick}
        label={btnText}
      />
    </JumboContainer>
  );
};

export default Form;
