  import styled from 'styled-components';
  export const HeroContainer = styled.div`
  margin: auto;
  max-width: 1100px;
  height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  `;

  export const CarouselItem = styled.figure`
  width: 100%;
  display: ${(props) => (props.active ? 'block' : 'none')}; 
    
    object-fit: cover;
  `;
  export const Img = styled.img`
  background-color: red;
  width: 100%;

  `
  export const Description = styled.figcaption`

  `
  export const ButtonContainer = styled.div`
  width: 50vw;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
    margin-top: 16px;
  `;

  export const Button = styled.button`
  background: ${(props) => (props.active === 'true' ? '#2C2A4A' : '#DABFFF')};
  background-color: rgba(44, 42, 74, 0.72);
  width: 4rem;
  height: 4px;
  border-radius: .3rem;
  border: none;
  margin: 0 8px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: scale(0.7);
    background-color: #2C2A4A;
  }
`;