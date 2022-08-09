import styled from "styled-components";

const BoxImage = styled.div`
width: 50%;
margin-bottom: -3px;
justify-content:center;
@media(max-width: 596px) {
  display: flex;
  width:100%;
  height: 20rem;
  overflow: hidden;
  img {
    width: auto;
    height: 60rem;
    margin-top: -10rem;
  }
}
`;

export default BoxImage;