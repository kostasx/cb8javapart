import React from 'react';

function Title(props){
    return (
        <>
            <hr/>
            <h2 style={{ borderBottom: "2px dotted black" }}>{props.children}</h2>
            <hr/>
        </>
    );
}

export default Title;