// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LoginButton from "./components/LoginButton";

const ProtectedDashboard = withAuthenticationRequired(Dashboard, {
    onRedirecting: () => <p>Redirecting...</p>,
});

function App() {
    const { isAuthenticated, logout } = useAuth0();

    return (
        <BrowserRouter>
            {isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>}
            {!isAuthenticated && <LoginButton />} 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<ProtectedDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;