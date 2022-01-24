import styled from 'styled-components';
import musicIcon from '../images/icon-music.svg';

const Section = styled.section`
 display: flex;
 align-items: center;
 justify-content: space-between;
 background-color: rgb(248, 249, 254);
 width: 84%;
 border-radius: 1rem;
 font-size: small;
 padding-left: 0.5rem;
 padding-right: 0.5rem;
 padding-top: 0.5rem;
 padding-bottom: 0.5rem;
`;

const Icon = styled.img`
 margin-left: 1rem;
`;

const Div = styled.div`
 height: 60px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 margin-left: -3rem;
`;

const PlanName = styled.p`
 font-weight: 700;
 margin: 0;
 padding: 0px;
`;

const PlanCost = styled.p`
 color: rgb(134, 139, 159);
 margin: 0px;
 margin-top: 0.2rem;
 padding: 0px;
`;

const Anchor = styled.a`
 margin-right: 0.5rem;
 font-weight: 700;
 color: rgb(52, 45, 139);

 &:hover {
  color: rgb(124, 117, 206);
  text-decoration: none;
 }
`;

const CardPrice = () => {
 return (
  <Section>
   <Icon src={musicIcon} alt='music-icon' />
   <Div>
    <PlanName>Annual Plan</PlanName>
    <PlanCost>$59.99/year</PlanCost>
   </Div>
   <Anchor href='https://reactjs.org/'>Change</Anchor>
  </Section>
 );
};

export default CardPrice;
