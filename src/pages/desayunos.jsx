import React from 'react'
import Navbar from "../components/Navbar/navbar";
import HeroSection from '../components/HeroSection/Hero';
import ListProducts from '../components/ListProducts/ListProducts';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import { styled } from 'styled-components';
import { Title, Description } from '../components/ListProducts/LIstProductsElements';
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
const Desayunos = () => {
  return (
    <>
    <HeroSection/>
    <ContainerHead>
      <Title>Desayunos</Title>
      <Description>Haz de su mañana un momento dulce y mágico.</Description>
      </ContainerHead>
    <Container>
      <ListProducts cate='Desayunos' />
    <PopularProducts />
    </Container>
    <Footer />
    </>
  )
}

export default Desayunos;