import StarRating from './StarRating'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Menu.css'
import storeFactory from '../store/storeFactory'
import { addAcclaim, addRate } from '../reducers/actions'
import PropTypes from 'prop-types'

const store = storeFactory()

class FormComponent extends Component {

constructor(props) {
    super(props);
    this.state = {
                acclaim: "",
		criticism: "",
		starsSelected: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeAcclaim = this.changeAcclaim.bind(this);
    this.changeCritic = this.changeCritic.bind(this);
    this.changeRate = this.changeRate.bind(this);
  }

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    componentWillMount() {
        this.unsubscribe = store.subscribe(
            () => this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }



render() {
  return (
    <article>
        <header>
            <h1>You is able to send us an acclaim!</h1>
        </header>
        <div className="recipes">
            { 
		<form className='acclaimForm' onSubmit={this.handleSubmit}>
			<div>
				<StarRating onChange={this.changeRate}/>
			</div>
			<div>
        			<label htmlFor="acclaim">Acclaims</label>
			</div>
          		<textarea className="acclaim" id="acclaim" value={this.state.acclaim} onChange={this.changeAcclaim}/>
			<div>
				<label htmlFor="critic">Criticism</label>
			</div>
			<textarea className="criticism" id="critic" value={this.state.criticism} onChange={this.changeCritic}/>
			<div>
				<Link to="admin"  onClick={this.handleSubmit}>Submit</Link>
			</div>
      		</form>

            }
        </div>
    </article>
)}

changeRate(starsSelected) {
            this.setState({starsSelected})
}


handleSubmit(event) {
console.log('current state', store.getState())
store.dispatch(addAcclaim(this.state.acclaim, this.state.criticism))
store.dispatch(addRate(this.state.starsSelected, store.getState().rate.rate))
console.log('total stars selected', this.state.starsSelected)
console.log('total acclaims', store.getState().acclaims.length)
console.log('total rates', store.getState().rate.rate)
}

changeAcclaim(event) {
	this.setState({acclaim: event.target.value});
}

changeCritic(event) {
	this.setState({criticism: event.target.value});
}


}

FormComponent.propTypes = {
    store: PropTypes.object.isRequired
}

FormComponent.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default FormComponent

