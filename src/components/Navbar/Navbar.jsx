import React, {useEffect, useState} from 'react';
import { IconContext } from 'react-icons/lib';
import {FaBars} from 'react-icons/fa';
import IconLogo from '../../images/SVG/logo.svg'
import { animateScroll as scroll } from 'react-scroll/modules';
import { Nav, NavbarContainer,Img, NavLogo, MobileIcon, NavMenu, NavLinks, NavIten, NavBtn, NavBtnLink, /* List, Links */} from './navbarelements';
import { navItems,} from './datanav';
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if( window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    },[]);

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    /* const handleNavItemClick = (event, item) => {
        const target = event.target;
        console.log('Contenido de NavLinks:', target);
        console.log('Contenido de NavLinks:', item.path);
      }; */

  return (
    <>
    <IconContext.Provider value={{ color: '#2C2A4A3' }}>
        <Nav scrollnav={scrollNav.toString()}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome} ><Img src={IconLogo}></Img></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    {navItems.map((item)=>(
                        <NavIten key={item.id}>
                            <NavLinks key={item.id} to={item.path} smooth="true" duration={500} spy={true.toString()} exact="true" >{item.title}</NavLinks> 
                            </NavIten>))}          
                </NavMenu>
                <NavBtn>
                <NavBtnLink to ="/contact" smooth="true" duration={500} spy="true" exact="true" offset={-80}>Contácto</NavBtnLink>
                </NavBtn>    
            </NavbarContainer>
            
        </Nav>
        </IconContext.Provider>
        
    </>
  )
}

export default Navbar;