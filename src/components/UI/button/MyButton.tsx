import React from 'react';
import './MyButton.scss'

type btnType = 'primary' | 'secondary'

interface MyButtonProps {
    type: btnType
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: string
}

const MyButton: React.FC<MyButtonProps> = ({type, onClick, children}) => {
    return (
        <button className={`btn ${type}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;