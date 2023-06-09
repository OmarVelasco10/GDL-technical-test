import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextareaInput = styled.textarea`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0px 0px 10px #00000029;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  height: 72px;
  margin-bottom: 10px;
  opacity: 1;
  padding: 8px 9px 8px 10px;
  resize: none;
  width: 177px;

  ::placeholder {
    color: #8e8e8e;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: bold;
    padding: 8px 9px 8px 10px;
  }
`;

export const Button = styled.button`
  align-items: center;
  background: linear-gradient(180deg, #7bca10, #619d10);
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: bold;
  height: 33px;
  justify-content: center;
  width: 100%;

  svg {
    margin-right: 5px;
  }
`;
