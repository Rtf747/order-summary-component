import styled from 'styled-components';
import CardBackground from './CardBackground';
import CardButtons from './CardButtons';
import CardHeader from './CardHeader';
import CardPrice from './CardPrice';
import CardTitle from './CardTitle';

const Section = styled.section`
 background-color: red;
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
