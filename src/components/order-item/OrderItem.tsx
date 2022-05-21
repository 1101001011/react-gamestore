import React from 'react';
import {Game} from '../../types/game';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {removeItemFromCart} from '../../store/reducers/cartReducer';
import './OrderItem.scss'

const OrderItem: React.FC<{game: Game}> = ({game}) => {
    const dispatch = useAppDispatch()

    const removeHandle = () => {
        dispatch(removeItemFromCart(game.id))
    }

    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <img src={game.image} alt=''/>
            </div>
            <div className='order-item__details'>
                <div className="order-item__title">
                    <span>{game.title}</span>
                </div>
                <div className="order-item__price">
                    <span>{game.price} руб.</span>
                </div>
            </div>
            <IoIosCloseCircleOutline
                className='order-item__delete-icon'
                size={26}
                onClick={removeHandle}
            />
        </div>
    );
};

export default OrderItem;