    import React from 'react'
    import { useAuthContext } from "@asgardeo/auth-react";


    const Dashboard = () => {
        const { state, signIn, signOut } = useAuthContext()

    return (
        <div>
            <p>log in</p>
            <button onClick={ () => signIn() }>Login</button>
            
        </div>
    )
    }

    export default Dashboard