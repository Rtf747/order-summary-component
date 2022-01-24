import styled from 'styled-components';
import BackgroundImageMobile from '../images/pattern-background-mobile.svg';
import BackgroundImageDesktop from '../images/pattern-background-desktop.svg';

const Image = styled.img`
 position: absolute;
 top: 0;
 left: 0;
 z-index: -10;
 width: 100vw;
`;

const windowWidth = window.innerWidth;

const CardBackground = () => {
 return (
  <>
   <Image
    className='pattern'
    src={windowWidth > 375 ? BackgroundImageDesktop : BackgroundImageMobile}
    alt='Background-pattern'
   />
  </>
 );
};

export default CardBackground;
