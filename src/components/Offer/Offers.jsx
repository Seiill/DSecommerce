import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/mySlice';
import { listProduct } from "../../util/data";
import { ProductContainer, ProductItem,ProductItemImage, TextInfo, Title, Description, AddCart, ImgContent, Descuento } from "./offerElemens";

const Offers = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  const filteredProducts = listProduct.filter((listProduct) => listProduct.offer);

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
          <AddCart onClick={() => handleAddToCart(product)}>Añadir al Carrito</AddCart>
        </ProductItem>
        
      ))}
    </ProductContainer>
  );
};

export default Offers;
