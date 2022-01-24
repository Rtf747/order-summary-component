import styled from 'styled-components';

const Section = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
 width: 100%;
`;

const Title = styled.h1`
 color: rgb(43, 48, 80);
 margin: 0;
 margin-top: 1.5rem;
 margin-bottom: 1rem;
 font-weight: 900;
`;

const Description = styled.p`
 margin: 0;
 margin-bottom: 1rem;
 color: rgb(134, 139, 159);
 width: 84%;
`;

const CardTitle = () => {
 return (
  <Section className='title'>
   <Title>Order Summary</Title>
   <Description>
    You can now listen to millions of songs, audiobooks, and podcasts on any
    device anywhre you like!
   </Description>
  </Section>
 );
};

export default CardTitle;
