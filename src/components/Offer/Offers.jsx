import React from "react";
import { products } from "./data";
import { ProductContainer, ProductItem,ProductItemImage, TextInfo, Title, Description, AddCart, ImgContent, Descuento } from "./offerElemens";

const Offers = () => {
  const filteredProducts = products.filter((product) => product.offer);

  return (
    <ProductContainer>
      {filteredProducts.slice(0, 4).map((product) => (
        <ProductItem key={product.id}>
            <Descuento>-10%</Descuento>
            <ImgContent><ProductItemImage src={product.img} /></ImgContent>
          <TextInfo>
          <Title>{product.name}</Title>
          <Description>Price: ${product.price}</Description>
          </TextInfo>
          <AddCart>Añadir al Carrito</AddCart>
        </ProductItem>
        
      ))}
    </ProductContainer>
  );
};

export default Offers;
