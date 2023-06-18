import { Link } from "react-router-dom";
import { styled } from "styled-components";

  export const Container = styled.div`
    max-width: 1100px;
    display: flex;
    margin: auto;
    justify-content: space-around;
    align-items: center;
  `
  export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
    margin: 2rem 4rem;
}`
  export const ImageContent = styled.div`
    width: 50%;
    `
  export const Image= styled.img`
    width: 100%;
    height: 100%;`
  export const TextContent= styled.div`
  width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `
  export const Title = styled.h1`
  margin-bottom: 2rem;
  color: #2C2A4A;
  `
  export const Price= styled.h2`
  margin-bottom: 2rem;
  color: #2C2A4A;
  `
  export const Description = styled.p`
  margin-bottom: 3rem;
  color: #2C2A4A;
  font-size: 18px;
  `
  export const ProductAmountContainer = styled.div`
  display: flex;
  color: #DABFFF;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  
  
  `
  export const Button = styled(Link)`
  font-size:1.5rem;
  font-weight: 700;
  color: #DABFFF;
  padding: 1rem;
  border: none; 
  background-color: #2C2A4A;
  cursor: pointer;
  text-decoration: none;
  `