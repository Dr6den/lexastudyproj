import PropTypes from 'prop-types'
import { Component } from 'react'
import Star from './Star'

export default class StarRating extends Component {

        static propTypes = {
            totalStars: PropTypes.number,
	    onUpdate: PropTypes.func
        }

        static defaultProps = {
            totalStars: 10
        }

        constructor(props) {
            super(props)
this.state = {
      fieldVal: 0
}

            this.change = this.change.bind(this)
        }

        change(starsSelected) {
    	    this.props.onChange(starsSelected);

            this.setState({starsSelected})
        }

        render() {
            const {totalStars} = this.props
            const {starsSelected} = this.state
            return (
                <div className="star-rating">
                    {[...Array(totalStars)].map((n, i) =>
                        <Star key={i}
                              selected={i<starsSelected}
 			      onMouseOver={() => this.change(i+1)}
                        />
                    )}
                    <p>{starsSelected} of {totalStars} stars</p>
                </div>
            )
        }

    }

