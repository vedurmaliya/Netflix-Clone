import { UserAuth } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";


function ProtectedRoute({children}) {

    const navigate = useNavigate();


    const {user} = UserAuth()

    if(!user ){
return navigate("/")
    }
    else{
        return children;
    }
 
  
}

export default ProtectedRoute