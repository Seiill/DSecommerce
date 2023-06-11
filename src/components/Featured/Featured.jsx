import React from "react";
import { featured } from "./data";
import { Container, FeatContent, IconContent, TextContainer, Title, Description, Wrapper } from "./featuredElements";
const Featured =()=>{
return(
    <Container>
        <Wrapper>
        {featured.map((item)=>(
        <FeatContent key={item.id}>
             <IconContent src={item.icon}></IconContent>
             <TextContainer>
             <Title>{item.title}</Title>
             <Description>{item.description}</Description>
             </TextContainer>
        </FeatContent>)
             )}
       
        </Wrapper>
    </Container>
)
}

export default Featured