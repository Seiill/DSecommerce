import React from 'react'
import { Container, Right, Left, Center, Logo, Description, SocialContainer, SocialIcon, Title, List, ListItem, ContactItem, Payment} from './footerElements'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RoomIcon from '@mui/icons-material/Room';    
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>DulceSopresa</Logo>
            <Description>Visita nuestras redes sociales, y enterate de las sorpresas que tenemos para tí.</Description>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <FacebookOutlinedIcon />
                </SocialIcon>
                <SocialIcon color = "E4405F">
                   <InstagramIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Acceso rápido</Title>
            <List>
                <ListItem>Inicio</ListItem>
                <ListItem>Desayunos</ListItem>
                <ListItem>Detalles</ListItem>
                <ListItem>Terminos y condiciones</ListItem>
            </List>
        </Center>
        <Right>
           <Title>Contáctanos</Title>
            <ContactItem><RoomIcon style={{marginRight: "10px"}}/>Los monjes</ContactItem>
            <ContactItem><ContactPhoneIcon style={{marginRight: "10px"}} />3255552422</ContactItem>
            <ContactItem><EmailOutlinedIcon style={{marginRight: "10px"}} />info.ventas@ds.com</ContactItem>
            <Payment src='https://www.navipartner.com/wp-content/uploads/sites/2/2020/08/Mobile-Payments-1.png'></Payment>
        </Right>
        
    </Container>
  )
}

export default Footer