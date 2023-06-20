import { styled } from "styled-components"
import {Link} from 'react-router-dom'

export const Container= styled.aside`
width: 20%;
display: flex;
flex-direction:column;
`
export const Title = styled.h1`
font-size: ${props => props.fontSize};
text-align: center;
    padding: 20px 0;
    color: #2C2A4A;
`
export const ContentImage = styled(Link)`
    width: 150px;
    height: 150px;
    padding-bottom: 30px;
    display: flex;
    cursor: pointer;
    text-decoration: none;
    `
export const Image =styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-right: 20px;
    `
export const TextContent = styled.figcaption`
display: flex;
    flex-direction: column;
    row-gap: 10px;
`
export const Name = styled.h3`
color: #2C2A4A;
`
export const ProductPrice = styled.p`
font-weight: 600;
color: #4F518C;
`
export const Categories = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-left: 20px;
    padding-bottom: 40px;
`
export const ListCategories = styled.ul`

list-style: none;
display: flex;
flex-direction: column;
row-gap: 20px;


`
export const Li = styled.li`
list-style-type: circle;
font-size: 16px;
`

export const StarProduct = styled.div`
height: 25%;
width: 100%;
padding-bottom: 10px;
`