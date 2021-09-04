import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GraphQLClient, ClientContext} from 'graphql-hooks';

const client = new GraphQLClient({
    url: 'https://graphql.datocms.com/',
    headers: {
        Authorization: process.env.REACT_APP_DATO_API_TOKEN || '',
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ClientContext.Provider value={client}>
            <App />
        </ClientContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
