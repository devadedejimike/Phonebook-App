import axios from "axios";
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    console.log(`sending delete request for id : ${id}`)
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}



export default{ getAll, create, update, remove }