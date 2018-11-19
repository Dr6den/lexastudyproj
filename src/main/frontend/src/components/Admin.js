import { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Menu.css'
import PropTypes from 'prop-types'
import storeFactory from '../store/storeFactory'

const store = storeFactory()

class Admin extends Component {
    
render() {
  let outputAcclaims = '';
  let outputCriticism = '';
  let itbe =store.getState().acclaims;
  itbe.forEach(function(element) {outputAcclaims += '* ' + element.acclaim + '\n\n'});
  itbe.forEach(function(element) {outputCriticism += '* ' + element.criticism + '\n\n'});
  return (
    <article>
        <header>
            <h1>Administrative pane where you see all acclaims!</h1>
        </header>
        <div> 
		<form className='adminForm' onSubmit={this.handleSubmit}>
			<div>
				<p><b>Total Rate is {store.getState().rate.rate}</b></p>
			</div>
			<div>
        			<label htmlFor="acclaim">Acclaims</label>
			</div>
          		<textarea className="total-acclaim" id="acclaim">{outputAcclaims}</textarea>
			<div>
        			<label htmlFor="critic">Criticism</label>
			</div>
          		<textarea className="total-critic" id="critic">{outputCriticism}</textarea>
			<div>
				<Link to="/"  onClick={this.handleSubmit}>Submit</Link>
			</div>
      		</form>
        </div>
    </article>
)}


}

Admin.propTypes = {
    store: PropTypes.object.isRequired
}

Admin.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default Admin
