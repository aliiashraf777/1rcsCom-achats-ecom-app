import styled from "styled-components"
import { Container, Section } from "../../styles/styles";
import Title from "../Common/Title";
import Slider from "react-slick";
import CustomNextArrow from "../Common/CustomNextArrow";
import CustomPrevArrow from "../Common/CustomPrevArrow";
import { newArrivalData } from "../../data/data";
import { staticImages } from "../../utils/images";
import { commonCardStyles } from "../../styles/card";
import { breakpoints } from "../../styles/themes/default";


const ProductCardBoxWrapper = styled.div`
    ${commonCardStyles}

    .product-img {
        height: 262px;
        width: 262px;
    }
`;

const ArrivalSliderWrapper = styled.div`
    .custom-prev-arrow {
        top: 43%;
        left: -18px;

        @media (max-width: ${breakpoints.xxl}) {
            left: 24px;
        }

        @media (max-width: ${breakpoints.xs}) {
            left: 4px;
        }
    }

    .custom-next-arrow {
        top: 43%;
        right: -18px;

        @media (max-width: ${breakpoints.xxl}) {
            right: 24px;
        }

        @media (max-width: ${breakpoints.xs}) {
            right: 4px;
        }
    }
`;
 
const NewArrival = () => {

    const settings = {
        dots: false,
        infinite: 300,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    };

    return (
        <Section>
            <Container>
                <Title titleText={'New Arrival'} />

                <ArrivalSliderWrapper>
                    <Slider
                        nextArrow={<CustomNextArrow />}
                        prevArrow={<CustomPrevArrow />}
                        {...settings}
                    >
                        {
                            newArrivalData?.map((newArrival) => {
                                return (
                                    <ProductCardBoxWrapper key={newArrival.key}>
                                        <div className="product-img">
                                            <img
                                                src={newArrival.imgSource}
                                                alt=""
                                                className="object-fit-cover"
                                            />
                                        </div>

                                        <div className="product-info">
                                            <p className="font-semibold text-xl">
                                                {newArrival.title}
                                            </p>
                                        </div>
                                    </ProductCardBoxWrapper>
                                )
                            })
                        }
                    </Slider>
                </ArrivalSliderWrapper>
            </Container>
        </Section>
    )
}

export default NewArrival
