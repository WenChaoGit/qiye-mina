import baseUrl from '../config/config'
const fly = require('../utils/wx')
fly.interceptors.request.baseUrl = baseUrl

export {
    fly
}