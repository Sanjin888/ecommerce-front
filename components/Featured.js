import Center from "./Center";
import styled from "styled-components";
import PrimaryBtn from "./PrimaryBtn";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img{
   max-width: 100%;
  }
`;

const Column = styled.div`
 display: flex;
 align-items: center;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <Title>Pro anywhere</Title>
            <Desc>lorem ipsum diashifhdaihdfiushfiudhsaufsdufjsduifjhusfiudshfuisdufd</Desc>
            <button>Read more</button>
            <PrimaryBtn size>Add to cart</PrimaryBtn>
          </Column>
          <Column>
           <img src="../assets\Macbook.jpg" alt="Macbook"/>
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}
