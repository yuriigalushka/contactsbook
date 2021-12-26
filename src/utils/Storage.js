const TOKEN_KEY = 'TOKEN_KEY'

export default class Storage {
    static getToken() {
        return localStorage.getItem(TOKEN_KEY)
    }

    static setToken(token) {
        return localStorage.setItem(TOKEN_KEY, token)
    }

    static removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    }
}