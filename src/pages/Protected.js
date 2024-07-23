import React from 'react'
import { useAuthContext } from "@asgardeo/auth-react";

const Protected = () => {
    const { state, signIn, signOut } = useAuthContext()
    console.log(state.isAuthenticated)
    console.log(state.username)
  return (
    <div>Protected
        <button onClick={ () => signOut() } >sign out</button>
    </div>
  )
}

export default Protected