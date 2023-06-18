import styled from 'styled-components';
 
/* import { mobile } from "../../responsive"; */
export const Container = styled.div`
    margin: auto;
    max-width: 1100px;
    width: 100%;
    height: 85vh;
    display: flex;
    position: relative;
    padding: 0 0 20px 0;
    overflow:hidden;
`
export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === 'left' && "10px"};
    right: ${(props) => props.direction === 'right' && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw);
`
export const Image = styled.img`
    height: 80%;
`
export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`
export const ImageContainer = styled.div`
    height: 100%;;
    flex: 1;

`
export const InfoContainer = styled.div`
padding: 50px;
    flex: 1;
`
export const Title = styled.h1`
    font-size: 2.5rem;
`
export const Description = styled.p`
     margin: 3rem 0;
     
     font-size: 0.9rem;
     font-weight: 500;
     letter-spacing: .1rem;
`
export const Button = styled.button`
padding: .8rem;
font-size: 1.2rem;
background-color: transparent;
cursor: pointer;
    
`
