import { HeroContainer, CarouselContainer, CarouselItem, ButtonContainer,Img, Button, } from './HeroElements';
import { imagescarrousel } from './dataHero';
import React, { useState, useEffect } from 'react';

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
            <CarouselItem 
            key ={item.id} active={index.toString()=== activeIndex.toString()}
            onClick={()=> handleSlideChange(index)}>
            <Img src={item.image}></Img>
            
        </CarouselItem>  
         ))}
      </CarouselContainer>

      <ButtonContainer>
        {imagescarrousel.map((item, index) => (
          <Button
            key={item.id}
            active={index === activeIndex ? "true" : "false"}
            onClick={() => handleSlideChange(index)}
          ></Button>
        ))}
      </ButtonContainer>
    </HeroContainer>
  );
};

export default HeroSection;
