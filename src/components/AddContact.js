import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {addContact} from '../store/contacts/contactActions'

class AddContact extends Component {
	state = {
        date: {
            name: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            description: ''
        },
        errors: [],
        isAdded: false,
        message: ''
    }

    handleChange = e => {
        this.setState({
            date: {
                ...this.state.date,
                [e.target.name]: e.target.value
            }
        })
    }

    validateForm = () => {
        const err = []
        Object.entries(this.state.date).map(i => {
            if (i[1] === '') err.push(i[0])
        })
        this.setState({
            errors: err
        })
        return err.length === 0
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.validateForm()) {
			this.props.addContact(this.state.date, this.props.token)
			this.props.history.push('/contacts')
        }
    }

    render() {
        return (
            <div className="contact-view add-contact">
                {this.state.isAdded && <div className="alert alert-success">Contact was added!</div>}
                {this.state.errors.length > 0 && <div className="alert alert-danger">All fields should be fill!</div>}
                <form action="#" onSubmit={this.handleSubmit}>
                    <input 
                        className={this.state.errors.includes('name') ? 'form-control is-invalid' : 'form-control'}
                        type="text" 
                        name="name"
                        placeholder="Type name"
                        value={this.state.date.name}
                        onChange={this.handleChange}
                    />
                    <input
                        className={this.state.errors.includes('lastName') ? 'form-control is-invalid' : 'form-control'}
                        type="text"
                        name="lastName"
                        placeholder="Type lastname"
                        value={this.state.date.lastName}
                        onChange={this.handleChange}
                    />
                    <input 
                        className={this.state.errors.includes('phone') ? 'form-control is-invalid' : 'form-control'}
                        type="text" 
                        name="phone"
                        placeholder="Type phone"
                        value={this.state.date.phone}
                        onChange={this.handleChange}
                    />
                    <input 
                        className={this.state.errors.includes('email') ? 'form-control is-invalid' : 'form-control'}
                        type="text" 
                        name="email" 
                        placeholder="Type email"
                        value={this.state.date.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        className={this.state.errors.includes('address') ? 'form-control is-invalid' : 'form-control'}
                        type="text" 
                        name="address"
                        placeholder="Type address"
                        value={this.state.date.address}
                        onChange={this.handleChange}
                    />
                    <textarea 
                        className={this.state.errors.includes('description') ? 'form-control is-invalid' : 'form-control'}
                        type="text" 
                        name="description"
                        placeholder="Type description"
                        value={this.state.date.description}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.message}</span>
                    <div className="buttons">
                        <button className="add-btn" type="submit">Add</button>
                    </div>
                </form>
				{this.props.error && <span className='contacts-list-error'>{this.props.error}</span>}
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		error: state.contact.error,
		token: state.app.token
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addContact: (contact, token) => dispatch(addContact(contact, token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddContact))