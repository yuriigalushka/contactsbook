import Storage from '../../utils/Storage'
import * as types from './appTypes'

const initState = {
	loader: false,
	token: Storage.getToken()
}

export default function appReducer(state = initState, {type, payload}) {
	switch (type) {
		case types.SHOW_LOADER:
			return {...state, loader: true}
		case types.HIDE_LOADER:
			return {...state, loader: false}
		case types.SET_TOKEN:
			Storage.setToken(payload.token)
			return {...state, token: payload.token}
		case types.REMOVE_TOKEN:
			Storage.removeToken()
			return {...state, token: null}
		default: return state
	}
}