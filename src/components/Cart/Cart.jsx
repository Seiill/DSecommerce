import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container,Checkout, Product,Wrapper, TitlesContainer,ProductType,Quantity,SubT, Image, TextContent, ProductTitle, ProductPrice, ProductContainer,ProductAmountContainer, ProductAmount, PriceDetail, ProductPriceTwo, CheckOutContainer, Title, Subtotal, TitleSub, PriceSub } from './cartElements'
import i1 from '../../images/CatalogoDS-16.jpg'
const Cart = () => {
  return (
    <Container>
        
        <ProductContainer>
            <TitlesContainer>
                 <ProductType>Producto</ProductType>
            <Quantity>Cantidad</Quantity> 
            <SubT>Subtotal</SubT>
            </TitlesContainer>
             <hr/>
             <Wrapper>
            <Product>
                <Image src={i1}/>
                <TextContent>
                    <ProductTitle>Product 1</ProductTitle>
                    <ProductPrice>$12.99</ProductPrice>
                </TextContent>
            </Product>
            <ProductAmountContainer>
                <AddIcon />
                <ProductAmount>1</ProductAmount>
                <RemoveIcon />
            </ProductAmountContainer>
            <PriceDetail>
            <ProductPriceTwo>$45.000</ProductPriceTwo>
            <DeleteIcon/>
            </PriceDetail>
            </Wrapper>
        </ProductContainer>
        <CheckOutContainer>
            <Title>Total de Compra</Title>
            <Subtotal>
                <TitleSub>Subtotal</TitleSub>
                <PriceSub>$35.000</PriceSub>
            </Subtotal>
            <Subtotal>
                <TitleSub>Total</TitleSub>
                <PriceSub>$45.000</PriceSub>
            </Subtotal>
            <Checkout>Comprar</Checkout>

        </CheckOutContainer>
    </Container>
  )
}

export default Cart