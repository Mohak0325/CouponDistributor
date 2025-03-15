import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom' 

function ProtectedRoutes({children}) {
    const isValidated = false;
    const navigate = useNavigate();
    
    useEffect(() => {
      if(!isValidated) navigate('/');
    });

    return (
        <div>
            children
        </div>        
    )
}

export default ProtectedRoutes