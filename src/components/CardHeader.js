import styled from 'styled-components';
import headerImage from '../images/illustration-hero.svg';

const Image = styled.img`
 width: 100%;
 border-top-left-radius: 1rem;
 border-top-right-radius: 1rem;
`;

const CardHeader = () => {
 return <Image src={headerImage} alt='woman-dancing' />;
};

export default CardHeader;
