import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { removeToken } from '../store/app/appActions';
import { removeAllContact } from '../store/contacts/contactActions';

const Header = (props) => {
	return (
		<div className="nav">
			<h2 onClick={() => props.history.push('/contacts')}>Phone Book</h2>
			<ul>
				{props.isAuth && <li><NavLink to={'/login'} onClick={() => {props.removeToken()}}>Logout</NavLink></li>}
				{!props.isAuth &&<li><NavLink to={'/login'}>Login</NavLink></li>}
				{props.isAuth && <li><NavLink to={'/contacts/add'}>Add new contact</NavLink></li>}		
				{props.isAuth && <li><NavLink to={'/contacts'}
					style={{ backgroundColor: 'red' }}
					onClick={() => {
						props.removeAllContact(props.token)
						props.history.push('/contacts')
					}}
					>Delete all contacts</NavLink></li>}
			</ul>
		</div>
	);
};

const mapStateToProps = state => {
    return {
		isAuth: !!state.app.token,
		token: state.app.token
    }
}

const mapDispatchToProps = dispatch => {
	return {
		removeToken: () => dispatch(removeToken()),
		removeAllContact: token => dispatch(removeAllContact(token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));