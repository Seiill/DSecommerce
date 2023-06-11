import { styled } from "styled-components";

export const Container = styled.div`
max-width: 1100px;
margin: auto;
`
export const Section = styled.div`
width: 100%;
display: flex;
flex-direction: ${(props) => props.direction};
flex-wrap: wrap;
column-gap: 1%;
margin: 0 3rem;
}


`
export const ImageContainer = styled.div`
width: 49%;
height: 100%;

`
export const TextContent = styled.div`
width: 49%;
min-width: 400px;
`
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
export const Title = styled.h1`
color: #2C2A4A;
font-size: 3rem;
padding-bottom: 20px;
margin: 0 2rem;
`
export const Description = styled.p`
color: #4F518C;
margin: 0 2rem;
`