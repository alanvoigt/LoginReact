import React from "react"
import { AuthProvider } from "../../context/AuthProvider";
import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = ({ children }: {children: JSX.Element}) => {
    const auth = useAuth();

    if (!auth.email){
        return <h1> you don't have access </h1>;
    }

    return children;
};