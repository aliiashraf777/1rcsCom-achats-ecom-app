import { TitleWrapper } from '../../styles/styles'
import PropTypes from 'prop-types';

const Title = ({ titleText }) => {
    return (
        <TitleWrapper className='title'>
            <h3>{titleText}</h3>
        </TitleWrapper>
    )
}

export default Title

Title.propTypes = {
    titleText: PropTypes.string
}