import axios from 'axios'

export const login = url => ({
    type: "LOGIN",
    payload: axios.post(url)
})