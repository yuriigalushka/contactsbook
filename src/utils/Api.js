import axios from 'axios'

const client = axios.create({
	baseURL: 'https://contacts-telran.herokuapp.com'
})

export default class Api {
	static login(email, password) {
		return client.post('/api/login', {
			email,
			password
		})
	}

	static registration(email, password) {
		return client.post('/api/registration', {
			email,
			password
		})
	}

	static getAllContacts(token) {
		return client.get('/api/contact', {
			headers: {
				Authorization: token
			}
		})
	}

	static removeContact(id, token) {
		return client.delete(`/api/contact/${id}`, {
			headers: {
				Authorization: token
			},
			id
		})
	}

	static removeAllContact(token) {
		return client.delete('/api/clear', {
			headers: {
				Authorization: token
			}
		})
	}

	static editContact(contact, token) {
		let requestBody = JSON.stringify(contact);
		return client.put('/api/contact', requestBody, {
			headers: {
				Authorization: token,
				'Content-Type': 'application/json'
			}
		})
	}

	static addContact(contact, token) {
		let requestBody = JSON.stringify(contact);
		return client.post('/api/contact', requestBody, {
			headers: {
				Authorization: token,
				'Content-Type': 'application/json'
			}
		})
	}
}