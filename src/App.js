import './global.css';
import Box from './components/box';
import BoxImage from './components/box-image';
import Parfum from './image-parfum.jpg';
import BoxInfo from './components/box-info';
import TitleProduct from './components/title-product';
import BoxDesc from './components/box-desc';
import Price from './components/price';
import ButtonCart from './components/button-cart';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function App() {
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

          <ButtonCart> 
            <AiOutlineShoppingCart/> Add to Cart</ButtonCart>
        </BoxInfo>
      </Box>
    </div>
  );
}

export default App;
