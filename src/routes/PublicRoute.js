import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
    return (
        <Route {...rest} render={({ location }) => children} />
    );
};

export default PublicRoute;
