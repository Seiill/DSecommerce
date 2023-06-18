import React from "react";

import { listProduct } from "../../util/data";
import { GalleryContainer, ContentImage, Title, Image, TextInfo, Caption, Description, Container } from "./galleryElements";

const breakpointColumnsObj = {
    default: 4, // Número de columnas por defecto
    1100: 3, // Para pantallas de 1100px de ancho o menos, 3 columnas
    700: 2, // Para pantallas de 700px de ancho o menos, 2 columnas
    500: 1 // Para pantallas de 500px de ancho o menos, 1 columna
  };

const Gallery = () => {


        return (
       <Container>
        <Title>Sorprende de formas maravillosas</Title>
      <GalleryContainer breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        
        {listProduct.map((item) => (
          <ContentImage key={item.id}>
            <Image src={item.img} alt={item.name} />
            <TextInfo>
            <Caption>${item.price}</Caption>
            <Description>{item.name}</Description>
            </TextInfo>
          </ContentImage>
        ))}
      </GalleryContainer>
       </Container>
    );
  };
  
  export default Gallery;