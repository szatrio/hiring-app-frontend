import axios from 'axios'
import getJwt from '../../../helpers/jwt'

let url = `http://localhost:8000/engineer/`

// async function getDetail(e) {
  // const result = 
  // return await axios.get(url+e, { headers: { Authorization: `Bearer ${getJwt().token}`}})
  // console.log(result.data.data[0]);
  // return await result.data.data[0];
// }

export const engDetail = e => dispatch => {
    // const payload = getDetail(e)
    // return dispatch=>{
    //     dispatch({
    //     type: "ENGINEER_DETAIL",
    //     payload : axios.get(url+e, { headers: { Authorization: `Bearer ${getJwt().token}`}})
    //     })
    // }
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
