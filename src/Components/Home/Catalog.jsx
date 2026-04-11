import PropTypes from 'prop-types'
import { Container, Section } from '../../styles/styles'
import Title from '../Common/Title'
import ProductList from '../Product/ProductList'
 
const Catalog = ({ catalogTitle, products }) => {
    return (
        <Section>
            <Container>
                <div className="categories-content">
                    <Title titleText={catalogTitle} />
                    <ProductList products={products} />
                </div>
            </Container>
        </Section>
    )
}

export default Catalog

Catalog.propTypes = {
    catalogTitle: PropTypes.string,
    products: PropTypes.array,
}