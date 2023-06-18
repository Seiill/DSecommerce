import React from 'react';
import HeroSection from '../components/HeroSection/Hero';
import ListProducts from '../components/ListProducts/ListProducts';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import { styled } from 'styled-components';
import { Title, Description } from '../components/ListProducts/ListProductsElements';
import Footer from '../components/Footer/Footer';

const Container = styled.section`
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: auto;
    column-gap: 20px;
    padding-bottom: 20px;

`
const ContainerHead = styled.div`
width: 100%;
max-width: 1100px;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
`

const Detalles = () => {

  return (
    <>
    <HeroSection/>
    <ContainerHead>
      <Title>Detalles</Title>
      <Description>Los mejores y más dulces talles para sorprender a esa persona ESPECIAL.</Description>
      </ContainerHead>
    <Container>
      <ListProducts cate='Detalles' />
    <PopularProducts />
    </Container>
    <Footer />
    </>
  )
}

export default Detalles