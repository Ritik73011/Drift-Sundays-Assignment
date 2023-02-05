import AdminLogin from '../Pages/AdminLogin'
const PrivateRoute = ({children}) => {
  let flag = false;
  return flag?children:<AdminLogin/>
}

export default PrivateRoute