import styled from "styled-components";
import { BsFillBagFill } from "react-icons/bs";

export const Section = styled.div`
 grid-column: container-start / container-end;
 height: 4vh;
 position:fixed;
 width:100%;
`;

export const Inside = styled.div`
  padding: 1rem;

  background: #fff;
       
       
 
        width:100%;
  font-size: 1rem;

  display: flex;

  justify-content: center;
`;

export const Bag = styled(BsFillBagFill)``;

export const Tabs = styled.div`

display:grid;

grid-template-columns: repeat(3,1fr);


`


export const In = styled.div`

font-size:0.9rem;
background:${props=>props.color};
color:${props=>props.font};
text-align:center;
border:1px solid black;
cursor: pointer;
box-shadow: inset 0 0 0.1rem  black;

`