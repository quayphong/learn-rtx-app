import {Navigate} from 'react-router-dom'
import * as React from 'react'

type PrivateRouteProps = {
    children: React.ReactNode
}
 
export function PrivateRoute({children}: PrivateRouteProps){
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    return <>{isLoggedIn ? children : <Navigate to = '/login' />}</>;
}