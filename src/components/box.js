import styled from 'styled-components';

const Box = styled.div`
position: relative;
width: 650px;
display: flex;
margin: 10rem auto;
background: #fff;
font-size: 14px;
border-radius: 5px;
overflow: hidden;
  @media(max-width: 596px) {
    flex-direction: column;
    position: relative;
    width:80%;
  }
`;

export default Box;