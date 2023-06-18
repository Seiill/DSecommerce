import Carousel from "../components/Corrousel/carrousel"
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";

import Offers from "../components/Offer/Offers";

const Home =() => {
    return(
        <>

        <Carousel />
        <Featured/>
        <Gallery />
        <Offers/>
        <Footer/>
        
        </>


    )

}

export default Home;