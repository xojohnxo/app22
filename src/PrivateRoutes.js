import { Navigate } from 'react-router-dom'

function PrivateRoutes({isLoggedin}) {
   if (!isLoggedin) {
    return <Navigate to="/" replace/>
   }
   else{
    return <Navigate to="/login" replace/>
    }
   

}
export default PrivateRoutes;