import musicIcon from '../images/icon-music.svg';

const CardPrice = () => {
 return (
  <section className='price-container'>
   <img src={musicIcon} alt='music-icon' />
   <div className='price-section'>
    <p className='price-name'>Annual Plan</p>
    <p className='price-cost'>$59.99/year</p>
   </div>
   <a href='https://reactjs.org/'>Change</a>
  </section>
 );
};

export default CardPrice;
