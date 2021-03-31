import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// Two parameters. 
// isAuth to check if user is authenticated
// component is the component that should be loaded

// ...rest gets all the other props we give to this <ProtectedRoute/> component. For example 'path'.
function ProtectedRoute({isAuth: isAuth, component: Component, ...rest}){
    return (
        <Route
            {...rest}
            render={props => {
                return isAuth
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/', }} />
            }}
        />
    )
}

export default ProtectedRoute;