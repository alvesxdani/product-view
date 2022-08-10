import './global.css';
import React from 'react';
import Box from './components/box';
import BoxImage from './components/box-image';
import Parfum from './image-parfum.jpg';
import BoxInfo from './components/box-info';
import TitleProduct from './components/title-product';
import BoxDesc from './components/box-desc';
import Price from './components/price';
import ButtonCart from './components/button-cart';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Modal from 'react-modal';
import ButtonClose from './components/button-close';
import { IoClose } from "react-icons/io5";
import AddedCart from './components/added-cart';


function App() {
  //VARIABLES
  const customStyles = {
    content: {
      width: 'auto',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //RETURN
  return (
    <div className="App">
      <Box>
        <BoxImage>
          <img src={Parfum} alt="" />
        </BoxImage>

        <BoxInfo>
          <TitleProduct>Gabrielle Essence Eau De Parfum</TitleProduct>

          <BoxDesc>
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </BoxDesc>

          <Price>
            $149.99
            <div>$169.99</div>
          </Price>

          <ButtonCart onClick={openModal}>
            <AiOutlineShoppingCart /> Add to Cart
          </ButtonCart>

          <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ButtonClose onClick={closeModal}><IoClose/></ButtonClose>
        <AddedCart>Added to Cart</AddedCart>
      </Modal>

        </BoxInfo>
      </Box>
    </div>
  );
}

export default App;
