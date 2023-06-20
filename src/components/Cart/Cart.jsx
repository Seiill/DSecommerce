import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, clearCart } from '../../store/mySlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container,Checkout, Product,Wrapper, TitlesContainer,ProductType,Quantity,SubT, Image, TextContent, ProductTitle, ProductPrice, ProductContainer,ProductAmountContainer, ProductAmount, PriceDetail, ProductPriceTwo, CheckOutContainer, Title, Subtotal, TitleSub, PriceSub } from './cartElements'
import { listProduct } from '../../util/data';
import { useParams } from 'react-router-dom';
const Cart = () => {
  const {id} = useParams();
    const {items: cartItems} = useSelector((state) => state.cart);
    const dispatch = useDispatch(); 

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
  };
  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };
const handleRemoveProduct = (id) =>{
  dispatch(clearCart(id))
}

  return (
    <Container>
        
        <ProductContainer> 
            <TitlesContainer>
                 <ProductType>Producto</ProductType>
            <Quantity>Cantidad</Quantity> 
            <SubT>Subtotal</SubT>
            </TitlesContainer>
             <hr/>
             {cartItems.map((item) => {
          const product = listProduct.find((p) => p.id === item.id);
          if (!product) {
            return <div>Producto no encontrado</div>;
          }
            return(
             <Wrapper key={item.id}>
            <Product>
                <Image src={item.img}/>
                <TextContent>
                    <ProductTitle>${item.name}</ProductTitle>
                    <ProductPrice>${item.price}</ProductPrice>
                </TextContent>
            </Product>
            <ProductAmountContainer  >
                <AddIcon onClick={() => handleIncreaseQuantity(item)}/>
                <ProductAmount >{item.quantity}</ProductAmount>
                <RemoveIcon onClick={() => handleRemoveFromCart(item.id)}/>
            </ProductAmountContainer>
            <PriceDetail>
            <ProductPriceTwo>${item.quantity * product.price}</ProductPriceTwo>
            <DeleteIcon  onClick={() => handleRemoveProduct(item.id)} />
            </PriceDetail>
            </Wrapper>
            );
             })}
        </ProductContainer>
        <CheckOutContainer>
        <Title>Total de Compra</Title>
        <Subtotal>
          <TitleSub>Subtotal</TitleSub>
          <PriceSub>
          ${(cartItems.reduce((total, item) => total + item.quantity * item.price, 0)).toString()}
          </PriceSub>
        </Subtotal>
        <Subtotal>
          <TitleSub>Total</TitleSub>
          <PriceSub>
          ${(cartItems.reduce((total, item) => total + item.quantity * item.price, 0)).toString()}
          </PriceSub>
        </Subtotal>
        <Checkout>Comprar</Checkout>
      </CheckOutContainer>

    </Container>
  )
}

export default Cart