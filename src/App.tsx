import React, { createContext } from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Login from "pages/Login";
import ChatRoom from "pages/ChatRoom";
import Router from "components/Router";
import { AuthProvider } from "contexts/AuthContext";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </ChakraProvider>
    );
};
