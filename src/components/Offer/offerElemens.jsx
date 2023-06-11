import styled from "styled-components";

export const ProductContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    max-width: 1100px;
    justify-content: center;
    flex-direction: row;
    column-gap: 10px;

`;

export const ProductItem = styled.figure`
width: 24%;
min-width: 200px;
`;

export const Descuento = styled.h4`
font-size: 1.5rem;
color: red;
position: relative;
z-index: 1;
top: 30px;
left: 5px;
`
export const ImgContent = styled.div`
width:100%;
height: 300px;
`
export const ProductItemImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
export const TextInfo = styled.figcaption`
margin: 0.3rem 1rem;
`
export const Title = styled.h3`
color: #2C2A4A;
font-size: 1.5rem;
`
export const Description = styled.p`
color: #2C2A4A;
font-weight: 600;
padding-top: 0.5rem;
`
export const AddCart = styled.button`
margin: 0.3rem 1rem;
font-size: 1.1rem;
background-color: #DABFFF;
color: #2C2A4A;
font-weight: 600;
padding: 10px;
border: none;
border-radius: 5px;

`