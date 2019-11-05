import React from 'react';

const name = <strong>AFDEMP</strong>;
const list = [ name, name, name ];

function Box(){
    return (
        <>
            <div>Box</div>
            <p>The school name is {name}</p>
            <p>3 * 8 = { 3 * 8 }</p>
            <div>
                { list }
            </div>
        </>
    );
}

export default Box;