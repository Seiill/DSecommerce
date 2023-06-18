import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/mySlice';
import { listProduct } from '../../util/data';
import {Container,
  ProductContainer,
  ImageContent,
  Image,
  TextContent,
  Title,
  Price,
  Description,
  ProductAmountContainer,
  Button} from './productElements'
const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = listProduct.find(item => item.id === id);
  if (!product) {
    return <div>Producto no encontrado</div>;
  }
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate('/cart');
  };
  

  return (
    <Container>
        <ProductContainer>
        <ImageContent>
            <Image src={product.img} alt={product.name}/>
        </ImageContent>
        <TextContent>
            <Title>{product.name}</Title>
            <Price>${product.price}</Price>
            <Description>{product.desc}</Description>
            <ProductAmountContainer>
                <Button to='/cart' onClick={handleAddToCart}>Añadir al carrito</Button>
                <Button>Comprar</Button>
            </ProductAmountContainer>
            <></>
        </TextContent>
        </ProductContainer>
    </Container>
  )
}

export default Product