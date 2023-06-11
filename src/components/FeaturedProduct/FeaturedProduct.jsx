import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FeaturedProduct = ({Img, Name, Desc,}) => {
  return (
    <Container>
        <ProductContainer>
        <ImageContent>
            <Image>{Img}</Image>
        </ImageContent>
        <TextContent>
            <Title>{Name}</Title>
            <Price>${Price}</Price>
            <Description>{Desc}</Description>
            <ProductAmountContainer>
                <AddIcon />
                <ProductAmount>1</ProductAmount>
                <RemoveIcon />
            </ProductAmountContainer>
            <></>
        </TextContent>
        </ProductContainer>
    </Container>
  )
}

export default FeaturedProduct