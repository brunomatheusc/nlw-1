import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import CreatePoint from './components/CreatePoint';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Routes from './routes';

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes />
        </>
    );
}

export default App;
