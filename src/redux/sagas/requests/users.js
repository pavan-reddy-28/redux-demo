import axios from 'axios'

export const requestGetUser = () => {
    return axios.request({
        method: 'get',
        baseURL: 'https://my-json-server.typicode.com/pavan-reddy-28/demo',
        url: '/db',

    })
}