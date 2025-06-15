import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
    <Auth0Provider
        domain="dev-y82hlyppl116fxf1.us.auth0.com"
        clientId="QsSbot5gJ577e1tzZ2mR8WgHn87wIJcK"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <App />
    </Auth0Provider>
)