import styled  from "styled-components";

const StyledButton = styled.button`
 background-color: #5542F6;
 border: 0;
 color: #fff;
 padding: 5px 15px;
 border-radius: 5px;
`;

export default function PrimaryBtn({children,...rest}) {
 return (
  <button {...rest}>{children}</button>
 );
}