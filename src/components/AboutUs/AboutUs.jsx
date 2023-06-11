import React from 'react'
import AboutImgOne from '../../images/DetallesDs-1.jpg';
import AboutImgTwo from '../../images/DetallesDs-2.jpg';
import { Container, Section, ImageContainer, Image, TextContent, Title, Description,  } from './aboutElement'
import Offers from '../Offer/Offers';

const AboutUs = () => {
  return (
    <>
    <Container>
        <Section direction="row">
            <ImageContainer>
                <Image src={AboutImgOne}/>
            </ImageContainer>
            <TextContent>
                    <Title>Nuestro sueño</Title>
                    <Description>Desde nuestros humildes comienzos, hemos crecido y evolucionado, pero nuestra pasión por crear experiencias memorables para nuestros clientes siempre ha sido el corazón de lo que hacemos. Cada desayuno sorpresa que entregamos es un testimonio de nuestro compromiso de llevar alegría y felicidad a las personas que más importan en tu vida.
                    <br/> <br/>

Nuestro equipo, formado por expertos culinarios y amantes de los detalles, trabaja con esmero para diseñar desayunos personalizados que se adapten a cualquier ocasión. Desde cumpleaños y aniversarios hasta logros importantes y momentos de amor, estamos aquí para ayudarte a expresar tus sentimientos más profundos a través de nuestros deliciosos y cuidadosamente seleccionados productos.</Description>
                </TextContent>
        </Section>
        <Section direction="row-reverse">
            <ImageContainer>
                <Image src={AboutImgTwo}/>
            </ImageContainer>
            <TextContent>
                    <Title>Nuestra Pasión</Title>
                    <Description>Nos especializamos en crear desayunos sorpresa personalizados con un toque familiar y lleno de amor. Cada uno de nuestros desayunos está diseñado meticulosamente para brindar una experiencia única y memorable.<br/><br/>

Nuestro proceso comienza con la selección de ingredientes frescos y de alta calidad que se combinan en combinaciones deliciosas y tentadoras. Utilizamos nuestra creatividad culinaria para presentar cada desayuno de manera artesanal, agregando pequeños detalles que hacen que sea aún más especial.<br/><br/>

Además, entendemos la importancia de la personalización. Trabajamos de cerca con nuestros clientes para conocer sus preferencias y necesidades, para así crear desayunos que reflejen su estilo único. Nos aseguramos de que cada desayuno sorpresa sea una expresión auténtica de amor y afecto.
</Description>
                </TextContent>
        </Section>
        <Offers/>
    </Container>
    </>
  )
}

export default AboutUs