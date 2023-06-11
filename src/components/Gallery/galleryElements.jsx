import styled from 'styled-components';
import Masonry from 'react-masonry-css';

export const Container = styled.section`
padding-bottom: 32px;
background-color: #2C2A4A;
max-width: 1100px;
margin: auto;
margin-top: 30px;
`
export const GalleryContainer = styled(Masonry)`

column-gap: 10px;
  & > div {
    margin-left: 10px; 
  }
  display: flex;

  & > div {
    margin-left: 10px;
  }
`;
export const Title = styled.h1`
font-size: 2rem;
color: #DABFFF;
text-align: center;
padding-top: 1rem;
`
export const ContentImage = styled.figure`
width: 100%;
padding-top: 1rem; 
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
export const TextInfo = styled.figcaption`
display: flex;
position: relative;
width: 120px;
height: 55px;
background: #DABFFF;
flex-direction: column;
justify-content: center;
align-items: center;
row-gap: 3px;
margin-top: -58px;
`

export const Caption = styled.h3`
  text-align: center;
`;
export const Description = styled.p`
  text-align: center;
`;
