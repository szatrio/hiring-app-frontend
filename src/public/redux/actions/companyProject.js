import axios from 'axios'
import getJwt from '../../../helpers/jwt'

let url = `http://localhost:8000/project/`

export const comProject = () => dispatch => {
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

export const addComProject = (data) => {
  console.log(data," ini data di actio")
  console.log(url,"ini rl di actio")
  axios.post(url, data, { headers: { Authorization: `Bearer ${getJwt().token}`, headers: getJwt().id_user}})
}

export const updateComProject = (data, id_project) => {
  console.log(data," ini data hire engineer")
  console.log(url,"ini rl di actio")
  axios.patch(url+id_project, data, { headers: { Authorization: `Bearer ${getJwt().token}`, headers: getJwt().id_user}})
}

export default comProject