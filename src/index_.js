import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <App>
        <Btn clickhandler={one}/>
        <Btn clickhandler={two}/>
    </App>,
    document.querySelector("#root")
);

ReactDOM.render(
    "Another one",
    document.querySelector("#box")
);