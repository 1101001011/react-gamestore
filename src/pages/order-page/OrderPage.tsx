import React from 'react';
import './OrderPage.scss'
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {calcTotalPrice} from '../../utils/totalPrice';
import OrderItem from '../../components/order-item/OrderItem';
import MyButton from '../../components/UI/button/MyButton';
import './OrderPage.scss'

const OrderPage = () => {
    const {items} = useTypedSelector(state => state.cart)

    if (items.length < 1) return <span className='order-page__default'>Ваша корзина пуста</span>

    return (
        <div className='order-page'>
            <div className='order-page__list'>
                {items.map(item => <OrderItem game={item}/>)}
            </div>
            <div className='order-page__total'>
                <div className='order-page__total-price'>
                    <span>{items.length} товаров на сумму: {calcTotalPrice(items)} руб.</span>
                </div>
                <MyButton type='primary'>
                    Оформить заказ
                </MyButton>
            </div>
        </div>
    );
};

export default OrderPage;