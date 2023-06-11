/* import React, { useState, useEffect } from 'react'; */
import { HeroContainer, CarouselContainer, CarouselItem, ButtonContainer,Img, Button, } from './HeroElements';
import { imagescarrousel } from './dataHero';
import React, { useState, useEffect } from 'react';


/* const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg'
];
 */
const HeroSection = () => {
const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imagescarrousel.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  }; 

  return (
    <HeroContainer>
      <CarouselContainer>
         {imagescarrousel.map((item, index)=>(
            <CarouselItem key ={item.id} active={index=== activeIndex}
            onClick={()=> handleSlideChange()}>
            <Img src={item.image}></Img>
            
        </CarouselItem>  
         ))}
      </CarouselContainer>

      <ButtonContainer>
        {imagescarrousel.map((item, index) => (
          <Button
            key={item.id}
            active={index === activeIndex}
            onClick={() => handleSlideChange(index)}
          ></Button>
        ))}
      </ButtonContainer>
    </HeroContainer>
  );
};

export default HeroSection;
