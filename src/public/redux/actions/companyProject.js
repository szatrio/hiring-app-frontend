import axios from 'axios'
import getJwt from '../../../helpers/jwt'

let url = `http://localhost:8000/project/`

const comProject = () => dispatch => {
    axios.get(url+`mycompany`, { headers: { Authorization: `Bearer ${getJwt().token}`, headers: getJwt().id_user}})
    .then(res =>{
      console.log(res.data.data,"hasil res")
      dispatch({
        type: "COMPANY_PROJECT",
        payload : res.data.data
      })
    })
    .catch(err =>{
      console.log(err)
    })
}

export const addComProject = () => dispatch => {
  axios.get(url, { headers: { Authorization: `Bearer ${getJwt().token}`, headers: getJwt().id_user}})
  .then(res =>{
    console.log(res.data.data,"hasil res")
    dispatch({
      type: "ADD_COMPANY_PROJECT",
      payload : res.data.data
    })
  })
  .catch(err =>{
    console.log(err)
  })
}

export default comProject