import React from 'react';
import One from '../../images/CatalogoDS-24.jpg'
import { listProduct } from '../../util/data';
import { Container, Title, StarProduct,ContentImage, Image, TextContent, Name, ProductPrice, Categories, ListCategories, Li } from './popularProductsElements';
const PopularProducts = () => {
    const popularProducts = listProduct
    .sort((a, b) => b.reviews - a.reviews).slice(0, 5);
  return (
    <Container>
        <Title>Más Populares</Title>
        {listProduct.map((item)=>(
            <ContentImage to={`/producto/${item.id}`} key={item.id}>
            <Image src={item.img}/>
            <TextContent>
                <Name>{item.name}</Name>
                <ProductPrice>${item.price}</ProductPrice>
            </TextContent>
        </ContentImage>
        ))}
        
        <Categories>
            <Title>Categorias</Title>
            <ListCategories>
                <Li>Desayunos</Li>
                <Li>Detalles</Li>
                <Li>Anchetas</Li>
            </ListCategories>
        </Categories>
        <StarProduct>
            <Image src={One} />
        </StarProduct>
        <TextContent>
                <Name>Name1</Name>
                <ProductPrice>$1000</ProductPrice>
            </TextContent>
    </Container>
  )
}

export default PopularProducts