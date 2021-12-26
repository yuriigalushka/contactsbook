import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import deleteBtn from '../img/delete.png'
import editBtn from '../img/edit.png'
import technology from '../img/technology.png'
import multimedia from '../img/multimedia.png'
import buildings from '../img/buildings.png'
import { removeContact } from '../store/contacts/contactActions';

const ContactView = (props) => {
	const contactID = Number.parseInt(props.match.params.id)
	const currentContact = props.contact
	return (
		<div className="contact-view">
			<div className="header">
				<h2>{currentContact.name} {currentContact.lastName}</h2>
				<div className="btn-group">
					<div className="img-btn" onClick={() => props.history.push(`/contacts/${contactID}/edit`)}>
						<img src={editBtn} alt="" />
					</div>
					<div className="img-btn" onClick={() => {
						props.removeContact(contactID, props.token)
						props.history.push('/contacts')
					}}>
						<img src={deleteBtn} alt="" />
					</div>
				</div>
			</div>
			<div className="contact-view-row">
				<img src={technology} alt="" />
				<h3>{currentContact.phone}</h3>
			</div>
			<div className="contact-view-row">
				<img src={multimedia} alt="" />
				<h3>{currentContact.email}</h3>
			</div>
			<div className="contact-view-row">
				<img src={buildings} alt="" />
				<h3>{currentContact.address}</h3>
			</div>
			<p>{currentContact.description}</p>
			{props.error && <span className='contacts-list-error'>{props.error}</span>}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		error: state.contact.error,
		isAuth: !!state.app.token,
		token: state.app.token,
		contact: state.contact.contact
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeContact: (id, token) => dispatch(removeContact(id, token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactView))