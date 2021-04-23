import { useAuth } from "contexts/AuthContext";
import ChatRoom from "pages/ChatRoom";
import Home from "pages/Home";
import Login from "pages/Login";
import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

interface RouterProps {}

const Router: React.FC<RouterProps> = ({}) => {
    const user = useAuth();
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/chat">
                    <ChatRoom />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

function PrivateRoute({ children, ...rest }) {
    const user = useAuth();

    console.log(user);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
