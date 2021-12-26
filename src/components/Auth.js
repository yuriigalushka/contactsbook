import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login, registration } from '../store/auth/authActions'

class Auth extends Component {
	state = {
		email: '',
		password: ''
	}

	componentDidMount() {
		if (this.props.isAuth) {
			this.props.history.push('/contacts')
		}
	}

	componentDidUpdate() {
        if(this.props.isAuth){
            this.props.history.push('/contacts');
        }
    }

	login = () => {
		this.props.login(this.state.email, this.state.password)
	}

	registration = () => {
		this.props.registration(this.state.email, this.state.password)
	}

	render() {
		return (
			<div className='login'>
				<h2>Authentication</h2>
				<input
					type="email"
					className='form-control'
					placeholder='Type email'
					value={this.state.email}
					onChange={e => this.setState({email: e.target.value})}
				/>
				<input
					type="password"
					className='form-control'
					placeholder='Type password'
					value={this.state.password}
					onChange={e => this.setState({password: e.target.value})}
				/>
				{this.props.error && <span>{this.props.error}</span>}
				<div className="buttons">
					<button className="add-btn" onClick={this.login}>Login</button>
					<button className="add-btn" onClick={this.registration}>Registration</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		error: state.auth.error,
		isAuth: !!state.app.token
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login: (email, password) => dispatch(login(email, password)),
		registration: (email, password) => dispatch(registration(email, password))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth))