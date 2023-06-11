import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import {  Container, Arrow, Wrapper,ImageContainer,InfoContainer,Image,Slide, Title, Description, Button} from './carrouselElements';
import { slides } from './data';

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
      }else {
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
      }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <FaArrowLeft/>
        </Arrow>
        <Wrapper slideIndex= {slideIndex}>
          {slides.map((item)=>(
            
            <Slide bg ={item.bg} key={item.id}>
            <ImageContainer>
             <Image src= {item.img}/>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>COMPRAR</Button>
            </InfoContainer>
            </Slide>
           
          ))}
          
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <FaArrowRight/>
        </Arrow>
    </Container>
  );
};

export default Carousel;
