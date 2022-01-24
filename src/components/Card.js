import styled from 'styled-components';
import CardBackground from './CardBackground';
import CardButtons from './CardButtons';
import CardHeader from './CardHeader';
import CardPrice from './CardPrice';
import CardTitle from './CardTitle';

const Section = styled.section`
 width: 88vw;
 height: auto;
 background-color: white;
 border-radius: 1rem;
 box-shadow: 0 0.8rem 1rem rgb(197, 209, 247);
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

const Card = () => {
 return (
  <>
   <CardBackground />
   <Section>
    <CardHeader />
    <CardTitle />
    <CardPrice />
    <CardButtons />
   </Section>
  </>
 );
};

export default Card;
