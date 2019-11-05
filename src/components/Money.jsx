import React, { useState } from 'react'; // === React.useState
import './Money.css';

function Money(props){

    //      VARIABLE    METHOD
    const [ counter, setCounter ] = useState(0);
    const [ online,  setOnline  ] = useState( true );
    //       getter    setter

    const clickHandler = ()=>{
        setCounter( counter + 1 );
        setOnline( !online );
    }

    return (
        //                ===  .addEventListener( "click", clickHandler )
        <div style={{ borderColor: online ? "orange" : "red" }} className="money" onClick={clickHandler}>
            <p><mark>Counter: {counter}</mark></p>
            <p>Description: {props.val.description} </p>
            <p>Rate: {props.val.rate} </p>
            <p>Code: {props.val.code}</p>
        </div>
    );

}

export default Money;