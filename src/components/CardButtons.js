import styled from 'styled-components';

const Section = styled.section`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 margin-top: 1.3rem;
`;

const Accept = styled.button`
 cursor: pointer;
 font-size: 1rem;
 font-weight: 600;
 color: white;
 background-color: hsl(245, 75%, 52%);
 padding: 0.5rem;
 padding-top: 0.9rem;
 padding-bottom: 0.9rem;
 width: 90%;
 border-radius: 0.7rem;
 border-style: none;
 box-shadow: 0px 1rem 1rem 0px rgb(221, 220, 245);

 &:hover {
  background-color: rgb(118, 108, 241);
 }
`;

const Cancel = styled.button`
 color: rgb(113, 118, 137);
 cursor: pointer;
 font-weight: 700;
 font-size: 1rem;
 margin-top: 1.5rem;
 margin-bottom: 1.5rem;
 background-color: white;
 border-style: none;

 &:hover {
  color: rgb(35, 38, 66);
 }
`;

const CardButtons = () => {
 return (
  <Section className='buttons'>
   <Accept>Proceed to Payment</Accept>
   <Cancel>Cancel Order</Cancel>
  </Section>
 );
};

export default CardButtons;
