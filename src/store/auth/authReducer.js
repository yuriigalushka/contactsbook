import * as types from './authTypes'

const initState = {
	error: null
}

export default function authReducer(state = initState, {type, payload}) {
	switch (type) {
		case types.AUTH_ERROR:
			return {...state, error: payload.error}
		default: return state
	}
}