import React from 'react';
import { AuthProvider } from './components/Providers/auth';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

const root = 
ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

