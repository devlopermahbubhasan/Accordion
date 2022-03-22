import React, { useState } from 'react';
import { questions } from './api';
import Myaccroding from './Myaccroding';
import './Accroding.css';
const Accroding = () => {
    const [data , setData] = useState(questions);
    return (
        <div>
            <div className='mid'>
                <div className='text'>
            {
                data.map((curElem) => {
                    return <Myaccroding key={curElem.id} {...curElem}/>;
                })
            }
            </div>
            </div>
        </div>
    );
};

export default Accroding;