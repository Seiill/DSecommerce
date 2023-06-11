import { styled } from "styled-components"
export const Container = styled.section`

max-width: 80%;
display: flex;
flex-direction: column;
align-items: center;

`
export const Title = styled.h1`
width: 100%;
font-size: 5rem;
color: #2C2A4A;
text-align: center;
`
export const Description = styled.p`
color: #4F518C;
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 32px;
    padding-top: 18px;
}
`
export const GalleryProduct = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 7rem;
    column-gap: 16px;
    margin: 0 5px;
`
export const ContentImage = styled.figure`
    width: 100%;
    height: 100%;
`
export const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`
export const TextContent = styled.figcaption`
height: 18%;
width: 100%;
background-color: #DABFFF;
display: flex;
flex-direction: column;
justify-content: center;
row-gap: 5px;
`
export const ProductName = styled.h5`
font-size: 1.5rem;
    color: #2C2A4A;
    margin: 0 12px;
`
export const ProductPrice = styled.p`
font-size: 18px;
font-weight: 600;
color: #2C2A4A;
margin: 0 12px;
}
`

export const ContentProduct = styled.div`
    max-width: 251px;
    min-width: 251px;
    height: 400px;
}
`