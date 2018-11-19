import PropTypes from 'prop-types'

const Star = ({ selected=false, onMouseOver=f=>f }) =>
    <div className={(selected) ? "star selected" : "star"}
	 onMouseOver={onMouseOver}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onMouseOver: PropTypes.func
}

export default Star
