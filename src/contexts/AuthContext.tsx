import React, { createContext, ReactNode, useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { authService } from "utils/fbase";

const authContext = createContext<firebase.default.UserInfo | null | undefined>(null);

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [user, loading] = useAuthState(authService);
    return <authContext.Provider value={user?.providerData && user?.providerData[0]}>{children}</authContext.Provider>;
};

export const useAuth = () => {
    return useContext(authContext);
};
