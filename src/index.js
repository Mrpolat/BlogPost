import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BlogPostProvider } from './Context/blogPost';
import { EmailProvider } from './Context/email';
import { UserProvider } from './Context/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogPostProvider>
      <EmailProvider>
        <UserProvider>
        <App />
        </UserProvider>
      </EmailProvider>
    </BlogPostProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
