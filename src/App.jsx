import React, { useState } from 'react';
import Money from './components/Money';
import Title from './components/Title';

function App(){

    const [ data, setData ] = useState([]);
    const handleClick = ()=>{

        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setData([ data.bpi.USD, data.bpi.GBP, data.bpi.EUR ]);
        })
        .catch((error)=>{
            console.error(error);
        })

        // setData([
        //     {
        //     "code": "USD",
        //     "symbol": "&#36;",
        //     "rate": "9,326.3433",
        //     "description": "United States Dollar",
        //     "rate_float": 9326.3433
        //     },
        //     {
        //     "code": "GBP",
        //     "symbol": "&pound;",
        //     "rate": "7,219.2053",
        //     "description": "British Pound Sterling",
        //     "rate_float": 7219.2053
        //     },
        //     {
        //     "code": "EUR",
        //     "symbol": "&euro;",
        //     "rate": "8,360.9269",
        //     "description": "Euro",
        //     "rate_float": 8360.9269
        //     }
        // ]);
    }

    return (
        <main onClick={handleClick}>
            <Title>
                My <mark>Money</mark> App
            </Title>
            {/* <Money val={data[0]}  /> */}

            {data.map((currency)=>{
                return <Money key={currency.code} val={currency} />
            })}
        </main>)
    ;

}

export default App;