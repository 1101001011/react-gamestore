import React from 'react';
import './ItemsQuantity.scss'

interface ItemsQuantityProps {
    quantity: number
}

const ItemsQuantity: React.FC<ItemsQuantityProps> = ({quantity= 0}) => {
    return (
        <>
            {quantity > 0 ? <div className='items-quantity'>{quantity}</div>
                : null
            }
        </>
    )
};

export default ItemsQuantity;