import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
const FormStyled = styled.form`
  input[type="submit"],
  input[type="text"] {
    height: 3em;
    line-height: 3em;
    outline: none;
  }
  input[type="text"] {
    padding: 0 5px 0 5px;
    width: 100%;
    border: 1px solid #ccc;
  }
  input[type="text"]:focus {
    border: 1px solid #3f51b5;
  }
  input[type="submit"] {
    border: none;
    background: #3f51b5;
    color: #f1f1f1;
    width: 33%;
    transition: all 0.3s linear;
    margin-top: 5px;
  }
  input[type="submit"]:active {
    transform: scale(0.8);
  }
  .error {
    color: #dd2c00;
  }
`;

const Form = ({ addNiterations }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    data.nIterations = parseInt(data.nIterations);
    console.log(data);
    addNiterations(data);
    e.target.reset();
  };
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="nIterations">Number of Iterations *</label>
        <input
          type="text"
          name="nIterations"
          id="nIterations"
          ref={register({ required: true, pattern: /^\d+$/ })}
        />
        {errors.nIterations && errors.nIterations.type === "required" && (
          <span className="error"> Number of Iterations is required </span>
        )}
        {errors.nIterations && errors.nIterations.type === "pattern" && (
          <span className="error">
            the number of iterations must be a positive number
          </span>
        )}
      </div>
      <input type="submit" value="Send" />
    </FormStyled>
  );
};

export default Form;
