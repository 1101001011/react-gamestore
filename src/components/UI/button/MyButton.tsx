import React from 'react';
import './MyButton.scss'

interface MyButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: string
}

const MyButton: React.FC<MyButtonProps> = ({onClick, children}) => {
    return (
        <button className='btn' onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;