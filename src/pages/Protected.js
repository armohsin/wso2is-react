import React, { useEffect, useState } from 'react'
import { useAuthContext } from "@asgardeo/auth-react";
import { Link } from 'react-router-dom';

const Protected = () => {
    const { state, getDecodedIDToken, signOut } = useAuthContext()

    const [roles, setRoles] = useState(null);
  
    useEffect(() => {
      getDecodedIDToken()
        .then((idToken) => {
          setRoles(idToken.roles); // Assuming the roles claim is present in the token
        })
        .catch((error) => {
          console.error("Error getting decoded ID token:", error);
        });
    }, []);
  
    console.log("isAuthenticated:", state.isAuthenticated);
    console.log("Roles:", roles);

  return (
    <div>Protected
        <button onClick={ () => signOut() } >sign out</button>
        {roles === 'Admin' && (
        <Link to='/simple-protected' >Only for admin</Link>
      )}
    </div>
  )
}

export default Protected