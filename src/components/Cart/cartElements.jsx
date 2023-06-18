import { styled } from "styled-components"
export const Container = styled.div`    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    max-width: 1100px;
    margin: auto;
    justify-content: space-around;
    min-height: 350px;
    `
    
export const ProductContainer = styled.div`
width: 65%;
min-width: 400px;
padding: 3rem 0;

`


export const Wrapper = styled.div`
width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const Product = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 10px;
    align-items: center;
    margin: 10px;
`
export const Image = styled.img`
width: 60px;
height: 70px;
object-fit: cover;
background-color: #4F518C;
`
export const TextContent = styled.div``
export const ProductTitle = styled.h4`
color
`
export const ProductPrice = styled.p``
export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    border: solid 2px #907AD6;
    border-radius: 7px;
    margin-left: 12px;
    `
export const ProductAmount = styled.span`

}`
export const PriceDetail = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    margin-right: 5px;
    align-items: center;
`
export const ProductPriceTwo = styled.span``
export const CheckOutContainer = styled.div`
    display: flex;
    width: 33%;
    min-height: 300px;
    border: Solid 2px #907AD6;
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 10px;
`
export const Title = styled.h3`color:#2C2A4A;`
export const Subtotal = styled.div`
color: #2C2A4A;
`
export const TitleSub = styled.h4`
color:#2C2A4A;`
export const PriceSub = styled.p`
color: #4F518C;`
export const TitlesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #DABFFF;
    color: #2C2A4A;
    `
export const ProductType = styled.h4`
width: 50%;`
export const Quantity = styled.h4`
width: 10%; 
color: #2C2A4A;
`
export const SubT = styled.h4`
margin-right: 20px;
color: #2C2A4A;
`
export const Checkout = styled.button`
    color: #2C2A4A;
    font-size: 1rem;
    background-color: #907AD6;
    font-weight: 600;
    padding: 15px 30px;
    border: none;
    border-radius: 6px;
    margin: 0 auto;
`