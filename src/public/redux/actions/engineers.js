import axios from 'axios'
import getJwt from '../../../helpers/jwt'

let url = `http://localhost:8000/engineer/`

export const engDetail = e => dispatch => {
    axios.get(url+e, { headers: { Authorization: `Bearer ${getJwt().token}`}})
    .then(res =>{
      dispatch({
        type: "ENGINEER_DETAIL",
        payload : res.data.data[0]
      })
    })
    .catch(err =>{
      console.log(err)
    })
}
