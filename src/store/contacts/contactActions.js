import Api from '../../utils/Api'
import * as appTypes from '../app/appTypes'
import * as contactTypes from './contactTypes'

export function getAllContacts(token) {
	return dispatch => {
		dispatch({type: appTypes.SHOW_LOADER});
		Api.getAllContacts(token)
			.then(response => {
				dispatch({type: appTypes.HIDE_LOADER});
				dispatch({
					type: contactTypes.GET_ALL_CONTACTS,
					payload: {
						contacts: response.data.contacts
					}
				})
				dispatch({
                    type: contactTypes.CONTACTS_ERROR,
                    payload: {
                        error: null
                    }
                })
			})
			.catch(error => {
				dispatch({
                    type: appTypes.HIDE_LOADER
				});
				dispatch({
					type: contactTypes.CONTACTS_ERROR,
					payload: {
						error: error.message
					}
				})
			})
	}
}

export function getContactByID(id) {
	return {
		type: contactTypes.GET_CONTACT_BY_ID,
		payload: {
			id
		}
	}
}

export function removeContact(id, token) {
	return dispatch => {
		dispatch({type: appTypes.SHOW_LOADER});
		Api.removeContact(id, token)
			.then(response => {
				dispatch({type: appTypes.HIDE_LOADER});
				dispatch({
					type: contactTypes.REMOVE_CONTACT,
					payload: {
						id
					}
				})
				dispatch({
                    type: contactTypes.CONTACTS_ERROR,
                    payload: {
                        error: null
                    }
                })
			})
			.catch(error => {
				dispatch({
                    type: appTypes.HIDE_LOADER
				});
				dispatch({
					type: contactTypes.CONTACTS_ERROR,
					payload: {
						error: error.message
					}
				})
			})
	}
}

export function removeAllContact(token) {
	return dispatch => {
		dispatch({type: appTypes.SHOW_LOADER});
		Api.removeAllContact(token)
			.then(response => {
				dispatch({type: appTypes.HIDE_LOADER});
				dispatch({
					type: contactTypes.REMOVE_ALL_CONTACT
				})
				dispatch({
                    type: contactTypes.CONTACTS_ERROR,
                    payload: {
                        error: null
                    }
                })
			})
			.catch(error => {
				dispatch({
                    type: appTypes.HIDE_LOADER
				});
				dispatch({
					type: contactTypes.CONTACTS_ERROR,
					payload: {
						error: error.message
					}
				})
			})
	}
}

export function editContact(contact, token) {
	return dispatch => {
		dispatch({type: appTypes.SHOW_LOADER});
		Api.editContact(contact, token)
			.then(response => {
				dispatch({type: appTypes.HIDE_LOADER});
				dispatch({
					type: contactTypes.EDIT_CONTACT,
					payload: {
						contact: response.data
					}
				})
				dispatch({
                    type: contactTypes.CONTACTS_ERROR,
                    payload: {
                        error: null
                    }
                })
			})
			.catch(error => {
				dispatch({
                    type: appTypes.HIDE_LOADER
				});
				dispatch({
					type: contactTypes.CONTACTS_ERROR,
					payload: {
						error: error.message
					}
				})
			})
	}
}

export function addContact(contact, token) {
	return dispatch => {
		dispatch({type: appTypes.SHOW_LOADER});
		Api.addContact(contact, token)
			.then(response => {
				dispatch({type: appTypes.HIDE_LOADER});
				dispatch({
					type: contactTypes.ADD_CONTACT,
					payload: {
						contact: response.data
					}
				})
				dispatch({
                    type: contactTypes.CONTACTS_ERROR,
                    payload: {
                        error: null
                    }
                })
			})
			.catch(error => {
				dispatch({
                    type: appTypes.HIDE_LOADER
				});
				dispatch({
					type: contactTypes.CONTACTS_ERROR,
					payload: {
						error: error.message
					}
				})
			})
	}
}