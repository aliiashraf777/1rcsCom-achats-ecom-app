import styled from "styled-components";
import { Container, ContentStylings, Section } from "../../styles/styles";
import Breadcrumb from "../../Components/Common/Breadcrumb"; 
import { Link } from "react-router-dom";
import ProductList from '../../Components/Product/ProductList';
import { products } from "../../data/data";
import Title from '../../Components/common/Title';
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import ProductFilter from "../../Components/Product/ProductFilter";


const ProductsContent = styled.div`
    grid-template-columns: 320px auto;
    margin: 20px 0;

    @media (max-width: ${breakpoints.xl}) {
        grid-template-columns: 260px auto;
    }

    @media (max-width: ${breakpoints.xl}) {
        grid-template-columns: 100%;
        row-gap: 24px;
    }
`;

const ProductsContentLeft = styled.div`
    border: 1px solid rgba(190, 188, 189, 0.4);
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.05)0 10px 50px;
    overflow: hidden;

    @media (max-width: ${breakpoints.lg}) {
        display: grid;
    }
`;

const ProductsContentRight = styled.div`
    padding: 16px 40px;

    .products-right-top {
        margin-bottom: 40px;
        @media (max-width: ${breakpoints.lg}) {
            margin-bottom: 24px;
        }

        @media (max-width: ${breakpoints.sm}) {
            flex-direction: column;
            row-gap: 16px;
            align-items: flex-start;
        }

        .products-right-nav {
            column-gap: 16px;

            li {
                a.active {
                    color: ${defaultTheme.color_purple};
                }
            }
        }

        @media (max-width: ${breakpoints.lg}) {
            padding-left: 12px;
            padding-right: 12px;
        }

        @media (max-width: ${breakpoints.sm})  {
            padding-left: 0;
            padding-right: 0;
        }
    }
`;

const DescriptionContent = styled.div`
    .content-stylings {
        margin-left: 32px;

        @media (max-widtH: ${breakpoints.sm}) {
            margin-left: 0;
        }
    }
`;


const ProductListScreen = () => {

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Products', link: '' },
    ]

    return (
        <main className='page-py-spacing'>
            <Container>
                <Breadcrumb items={breadcrumbItems} />

                <ProductsContent className='grid item-start'>
                    <ProductsContentLeft>
                        <>
                            <ProductFilter />
                        </>
                    </ProductsContentLeft>

                    <ProductsContentRight>
                        <div className="products-right-top flex items-center justify-between">
                            <h4 className="text-xxl">Women&apos;s Clothing</h4>

                            <ul className="products-right-nav flex items-center justify-end flex-wrap">
                                <li>
                                    <Link
                                        to='/'
                                        className='active text-lg font-semibold'
                                    >
                                        New
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/'
                                        className='text-lg font-semibold'
                                    >
                                        Recommended
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <ProductList
                            products={products.slice(0, 12)}
                        />
                    </ProductsContentRight>
                </ProductsContent>
            </Container>

            <Section>
                <Container>
                    <DescriptionContent>
                        <Title titleText={'Clothing for Everyone Online'} />

                        <ContentStylings
                            className='text-base'
                        >
                            <h4>Reexplore Clothing Collection Online at Achtas.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae nostrum atque animi laudantium inventore odit, asperiores sapiente cumque sint dolores debitis provident quia? Enim velit et provident error tempora.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nostrum quod placeat a quae suscipit ad, expedita labore quis eveniet.</p>

                            <h4>
                                One-stop Destination to Shop Every Clothing for Everyone:
                                Achats.
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                                iure doloribus optio aliquid id. Quos quod delectus, dolor est
                                ab exercitationem odio quae quas qui doloremque. Esse natus
                                minima ratione reiciendis nostrum, quam, quisquam modi aut,
                                neque hic provident dolorem.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                                laborum dolorem deserunt aperiam voluptate mollitia.
                            </p>
                            <Link to='/'>See Moreٖ</Link>
                        </ContentStylings>
                    </DescriptionContent>
                </Container>
            </Section>
        </main>
    )
}

export default ProductListScreen
