import styled from 'styled-components';
import BackgroundImage from '../images/pattern-background-mobile.svg';

const Image = styled.img`
 position: absolute;
 z-index: -1;
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
