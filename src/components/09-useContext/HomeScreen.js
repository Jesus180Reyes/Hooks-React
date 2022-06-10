import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    const { user } = useContext(UserContext);
    console.log(userContext);
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr></hr>
        </div>
    )
}
