import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: auto;
    background-color: #2C2A4A;
    justify-content: space-around;
    align-items: center;

`
export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
`
export const FeatContent = styled.div`
width: 27%;
min-width: 200px;
display: flex;
align-items: flex-start;
`
export const IconContent = styled.img`
margin-top: 0;
width: 50px;
`
export const TextContainer = styled.div`
padding-left: 20px;
color: #DABFFF;
`
export const Title = styled.h2`
padding-bottom: 10px;
`
export const Description = styled.p`
font-weigth: 700;
font-size: 18px;
`