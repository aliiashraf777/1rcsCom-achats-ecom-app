import styled from 'styled-components'
import { Container, Section, TitleWrapper } from '../../styles/styles'
import { brandsData } from '../../data/data';
import { breakpoints, defaultTheme } from '../../styles/themes/default';


const BrandsContent = styled.div`
    border-radius: 12px;
    padding: 40px 0;

    @media (max-width: ${breakpoints.lg}) {
        padding: 24px 0;
    }
`;

const StyledSectionTitle = styled(TitleWrapper)`
    padding-left: 0;

    &::after {
        display: none;
    }

    span {
        color: ${defaultTheme.color_yellow};
    }

    @media (max-width: ${breakpoints.sm}) {
        margin-bottom: 20px;
    }
`;

const BrandsListWrapper = styled.div`
    padding: 12px;
    margin-top: 40px;
    gap: 24px;

    @media (max-width: ${breakpoints.sm}) {
        gap: 12px;
        margin-top: 20px;
    }
`;

const BrandsItemWrapper = styled.div`
    width: 178px;
    height: 80px;
    border-radius: 12px;
    background-color: ${defaultTheme.color_white};
    padding: 16px;
    transition: ${defaultTheme.default_transition};

    img {
        width: auto;
    }

    @media (max-width: ${breakpoints.xs}) {
        width: 80px;
        height: 50px;
        border-radius: 4px;
    }

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`;

const Brands = () => {
    return (
        <Section>
            <Container>
                <BrandsContent className='bg-outerspace'>
                    <StyledSectionTitle className='text-white text-center justify-center flex-col'>
                        <h3>Top Brands Deal</h3>

                        <p className="text-xxl text-white">
                            Up to <span>60%</span> off on brands.
                        </p>
                    </StyledSectionTitle>

                    <BrandsListWrapper className='flex items-center flex-wrap justify-center'>
                        {
                            brandsData?.map((brand) => {
                                return (
                                    <BrandsItemWrapper
                                        className='flex items-center justify-center'
                                        key={brand.id}
                                    >
                                        <img src={brand.imgSource} alt="" />
                                    </BrandsItemWrapper>
                                )
                            })
                        }
                    </BrandsListWrapper>
                </BrandsContent>
            </Container>
        </Section>
    )
}

export default Brands
