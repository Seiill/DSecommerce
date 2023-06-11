import React from "react";

import { listImages } from "./data";
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
        
        {listImages.map((image) => (
          <ContentImage key={image.id}>
            <Image src={image.src} alt={image.alt} />
            <TextInfo>
            <Caption>{image.caption}</Caption>
            <Description>{image.desc}</Description>
            </TextInfo>
          </ContentImage>
        ))}
      </GalleryContainer>
       </Container>
    );
  };
  
  export default Gallery;