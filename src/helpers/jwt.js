const getJwt = () =>{
    const userData= {
      token: localStorage.getItem('token'),
      id_user: localStorage.getItem('id_user'),
      email: localStorage.getItem('email'),
      role: localStorage.getItem('role'),
      userCompany: localStorage.getItem('userCompany'),
      userEngineer: localStorage.getItem('userEngineer'),
    }
    return userData
  }

export default getJwt