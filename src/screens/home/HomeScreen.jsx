import styled from "styled-components"
import Hero from "../../Components/Home/Hero";
import Featured from "../../Components/Home/Featured";
import NewArrival from "../../Components/Home/NewArrival";
import SavingZone from "../../Components/Home/SavingZone";
import Catalog from "../../Components/Home/Catalog";
import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";
import Brands from "../../Components/Home/Brands";
import Feedback from "../../Components/Home/Feedback";


const HomeScreenWrapper = styled.main`

`;

const HomeScreen = () => {
    return (
        <HomeScreenWrapper>
            <Hero />
            <Featured />
            <NewArrival />
            <SavingZone />
            <Catalog
                catalogTitle={'Categories For Men'}
                products={mensCatalog}
            />
            <Catalog
                catalogTitle={'Categories For Women'}
                products={womensCatalog}
            />

            <Brands />

            <Catalog
                catalogTitle={'In The LimeLight'}
                products={limelightCatalog}
            />

            <Feedback />

        </HomeScreenWrapper>
    )
}

export default HomeScreen
