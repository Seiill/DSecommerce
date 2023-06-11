import React from 'react'
import { listProduct } from './dataProducts'
import { Container, GalleryProduct, ContentImage, Image, TextContent, ProductName, ProductPrice, ContentProduct } from './LIstProductsElements'

const ListProducts = ({cate}) => {
  return (
    <Container>
    <GalleryProduct>
        {listProduct.filter((item) => item.category === cate).map((item) => (
            <ContentProduct key={item.id}>
                <ContentImage>
                    <Image src={item.img} />
                </ContentImage>
                <TextContent>
                    <ProductName>{item.name}</ProductName>
                    <ProductPrice>${item.price}</ProductPrice>
                </TextContent>
            </ContentProduct>
        ))}
    </GalleryProduct>
</Container>
  )
}

export default ListProducts