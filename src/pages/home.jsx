import Carousel from "../components/Corrousel/carrousel"
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import HeroSection from "../components/HeroSection/Hero"
import Navbar from "../components/Navbar/navbar";
import Offers from "../components/Offer/Offers";
const Home =() => {
    return(
        <>
        {/* <Navbar/> */}
        <Carousel />
        <Featured/>
        <Gallery />
        <Offers/>
        <Footer/>
        
        </>


    )

}

export default Home;