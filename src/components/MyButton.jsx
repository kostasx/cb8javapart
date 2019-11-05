import React from 'react';
//=> <MyButton></MyButton>
import './MyButton.css';

function MyButton( props ){
    let color = "black";
    if ( typeof props.bgc !== "undefined" ){
        color = props.bgc;
    }

    const handleClick = (e)=>{
        console.log(e);
        alert();
    }

    return (
        <section style={{
            backgroundColor: color,
            margin: "10px"
        }}>
            <button onClick={handleClick} className="btn">{props.txt}</button>
        </section>
    );
}

export default MyButton;