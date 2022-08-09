import styled from "styled-components";

const ButtonCart = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: hsl(158, 36%, 37%);
color: #fff;
font: 1.4rem 'Montserrat';
text-align: center;
padding: 1.5rem;
border-radius: 5px;
cursor: pointer;
transition: .8s ease;
margin-top: 2.5rem;
 &:hover {
  background-color: hsl(212, 21%, 14%);
 }
  svg {
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
`;

export default ButtonCart;