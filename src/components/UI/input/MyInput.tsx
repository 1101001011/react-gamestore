import React from 'react';
import './MyInput.scss'

interface MyInputProps {
    type: string
    placeholder: string
}

const MyInput = ({...props}: MyInputProps) => {
    return (
        <input className='input' {...props}/>
    );
};

export default MyInput;