import React, { useState } from 'react';
import './Myacrro.css';
const Myaccroding = ({question, answer}) => {
    const [show, SetShow] = useState(false);
    return (
        <div>
        <div>
             <h3><span onClick={()=> SetShow(!show)}>{ show? <span className='min'>-</span>:<span className='add'>+</span>}</span>{question}</h3>
            
        </div>
        {show && <p>{answer}</p>}
        </div>
    );
};

export default Myaccroding;