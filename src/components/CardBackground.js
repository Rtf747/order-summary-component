import styled from 'styled-components';
import BackgroundImage from '../images/pattern-background-mobile.svg';

const Image = styled.img`
 position: absolute;
 top: 0;
 left: 0;
 z-index: -10;
 width: 100vw;
`;

const CardBackground = () => {
 return (
  <>
   <Image className='pattern' src={BackgroundImage} alt='Background-pattern' />
  </>
 );
};

export default CardBackground;
