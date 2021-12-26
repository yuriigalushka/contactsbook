import * as types from './contactTypes'

const initState = {
	contacts: [],
	error: null
}

export default function contactReducer(state = initState, {type, payload}) {
	switch (type) {
		case types.CONTACTS_ERROR:
			return {...state, error: payload.error}
		case types.GET_ALL_CONTACTS:
			return {...state, contacts: payload.contacts}
		case types.GET_CONTACT_BY_ID:
			return {...state, contact: state.contacts.find(c => c.id === payload.id)}	
		case types.REMOVE_CONTACT:
			return {...state, contacts: state.contacts.filter(c => c.id !== payload.id)}
		case types.EDIT_CONTACT:
			const arr = [...state.contacts]
			const idx = arr.findIndex(i => i.id === payload.contact.id)
			arr[idx] = {...arr[idx], ...payload.contact}
			return {
				...state,
				contacts: arr
			}	
		case types.ADD_CONTACT:
			return {...state, contacts: [...state.contacts, payload.contact]}	
		case types.REMOVE_ALL_CONTACT:
			return {...state, contacts: []}	
		default: return state
	}
}