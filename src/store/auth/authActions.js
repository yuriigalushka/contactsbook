import Api from '../../utils/Api';
import * as appTypes from '../app/appTypes';
import * as authTypes from './authTypes';

export function login(email, password) {
    return dispatch => {
        dispatch({type: appTypes.SHOW_LOADER});
        Api.login(email, password)
            .then(response => {
                dispatch({type: appTypes.HIDE_LOADER});
                dispatch({
                    type: appTypes.SET_TOKEN,
                    payload: {
                        token: response.data.token
                    }
                });
                dispatch({
                    type: authTypes.AUTH_ERROR,
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
                    type: authTypes.AUTH_ERROR,
                    payload: {
                        error: error.response.data.message
                    }
                })
            });
    }
}


export function registration(email, password) {
    return dispatch => {
        dispatch({type: appTypes.SHOW_LOADER});
        Api.registration(email, password)
            .then(response => {
                dispatch({type: appTypes.HIDE_LOADER});
                dispatch({
                    type: appTypes.SET_TOKEN,
                    payload: {
                        token: response.data.token
                    }
                });
                dispatch({
                    type: authTypes.AUTH_ERROR,
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
                    type: authTypes.AUTH_ERROR,
                    payload: {
                        error: error.response.data.message
                    }
                })
            });
    }
}