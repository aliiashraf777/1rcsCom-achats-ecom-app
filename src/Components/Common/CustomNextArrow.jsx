import PropTypes from "prop-types";
import { CustomNextArrowWrapper } from "../../styles/slider"
import { BsChevronRight } from "react-icons/bs";


const CustomNextArrow = ({ onClick }) => {
    return (
        <CustomNextArrowWrapper
            className='custom-next-arrow'
            onClick={onClick}
        >
            <BsChevronRight />
        </CustomNextArrowWrapper>
    )
}

export default CustomNextArrow;


CustomNextArrow.propTypes = {
    onClick: PropTypes.func,
}
