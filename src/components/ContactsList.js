import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getContactByID } from '../store/contacts/contactActions';

const ContactsList = (props) => {
	const currIndex = parseInt(props.match.params.id || '-1')
	return (
		<ul className="list">
			{props.error && <span className='contacts-list-error'>{props.error}</span>}
            {!props.error &&
                props.contacts.length === 0
                ?
                    "You don't have any contacts"
                :
                    props.contacts.map((contact, i) =>
                        <li
                            className={`list-item ${currIndex === contact.id ? 'item-active':''}`}
                            key={contact.id}
                            onClick={() => {
                                props.history.push(`/contacts/${contact.id}`)
                                props.getContactByID(contact.id)
                            }}
                        >
                            <h2 className="title">{contact.name} {contact.lastName}</h2>
                            <h3 className="sub-title">{contact.phone}</h3>
                        </li>
                    )
            }
        </ul>
	);
};

const mapStateToProps = state => {
	return {
		contacts: state.contact.contacts,
		error: state.contact.error
	}
}

const mapDispatchToProps = dispatch => {
    return {
        getContactByID: id => dispatch(getContactByID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactsList));