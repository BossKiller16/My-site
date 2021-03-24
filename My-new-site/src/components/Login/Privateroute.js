import React from 'react'
import { Redirect, Route } from "react-router-dom"
import { useAuth } from "./RegisterState"

function Privateroute({ component: Component, ...rest }) {
    const { user } = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                return user ? <Component {...props} /> : <Redirect to="/prihlasit-se" />
            }
            }>


        </Route>
    )
}

export default Privateroute
