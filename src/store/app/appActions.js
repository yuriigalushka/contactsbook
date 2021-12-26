import * as types from './appTypes'

export function setToken(token) {
    return {
        type: types.SET_TOKEN,
        payload: {
            token
        }
    }
}

export function removeToken() {
    return {
        type: types.REMOVE_TOKEN
    }
}

export function showLoader() {
    return {
        type: types.SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: types.HIDE_LOADER
    }
}