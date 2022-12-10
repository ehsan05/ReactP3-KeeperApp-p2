import React from 'react';
// import notes from '../note'
function Hero(props){
    return (
     <div className='contents'>
        <div className='content'>
            <h1>{props.title}</h1>
            <p>{props.contact}</p>
        </div>
     </div>
    );
}

export default Hero;