import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setuser] = useState({
        id: 123,

    });

    return (

        <UserContext.Provider value={{
            user,
            setuser,

        }} >

            <AppRouter />
        </UserContext.Provider>

    )
}
