import React from 'react'
import { listProduct } from '../../util/data'
import { Container, GalleryProduct, ContentImage, Image, TextContent, ProductName, ProductPrice, ContentProduct } from './ListProductsElements'

const ListProducts = ({cate}) => {
  return (
    <Container>
    <GalleryProduct>
        {listProduct.filter((item) => item.category === cate).map((item) => (
            <ContentProduct to={`/producto/${item.id}`}  key={item.id}> 
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