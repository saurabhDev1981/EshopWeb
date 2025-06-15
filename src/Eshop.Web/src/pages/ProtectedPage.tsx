// src/pages/ProtectedPage.tsx
import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedPage = () => {
    return <h1>This is a protected page.</h1>;
};

export default withAuthenticationRequired(ProtectedPage, {
    onRedirecting: () => <p>Loading...</p>,
});
