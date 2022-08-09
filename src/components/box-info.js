import styled from "styled-components";

const BoxInfo = styled.div`
width: 50%;
padding: 3rem;
display: flex;
flex-direction: column;
align-items: center;
@media(max-width: 596px) {
  flex-direction: column;
  position: relative;
  width:100%;
  justify-content:center;
}
`;

export default BoxInfo;