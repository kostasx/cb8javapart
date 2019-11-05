import React from 'react';
import MyButton from './MyButton';
import Box from './Box';
import logoReact from '../logo.svg';

function App(){

    console.log(logoReact);

    const styles = { padding: "10px" };
    const content = (
        <div style={styles}>
            <img alt="react logo" src={logoReact} width="100px" />
            <p>Hello</p>
            {/* <Box /> */}
            {/* <Box></Box> */}
            <MyButton bgc="orange" txt="Click me"></MyButton>
            <MyButton bgc="hotpink" txt="WOW"></MyButton>
            <MyButton txt="OMG"></MyButton>
        </div>
    );
    return content;
}

export default App;