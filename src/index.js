import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PersonContextProvider from './contexts/PersonContext';
import SearchContextProvider from './contexts/SearchContext';
import NoteContextProvider from './contexts/NoteContext';

const app = (
    <NoteContextProvider>
        <SearchContextProvider>
            <PersonContextProvider>
               <App/>
            </PersonContextProvider>
        </SearchContextProvider>
    </NoteContextProvider>
 
);

ReactDOM.render(app, document.getElementById('root'));


