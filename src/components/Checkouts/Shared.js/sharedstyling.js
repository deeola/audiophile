import styled from "styled-components";

const orange = "#d87d4a";

const veryblack = "#000000";

const verylightgray = "#ffffff";
const lightorange = '#FBAF85';

export const FormInput = styled.input`
  width: 100%;
  height: 50px;
  display: block;
  border: 1px solid gray;
  padding: 15px 10px;
  border-radius: 5px;
  margin-top: 10px;

  &:focus {
    border: 1px solid ${orange};
    outline: none;
  }
`;

export const FormLabel = styled.label``;

export const FormControl = styled.div`
  width: ${(prop) => (prop.primary ? "99%" : "50%")};
  margin: 10px 0px;
`;

export const Error = styled.p`
color: red;
`;
