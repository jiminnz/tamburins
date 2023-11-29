import React from 'react';
import style from './in_cart.module.css';

const In_cart = ({ img, name, type, gram, price, isGift = false }) => {
    return (
        <div id={style.in_cart_wrap}>
            <div className={style.img_wrap}>
                <img src={img} alt={name}/>
            </div>
            <div className={style.desc_wrap}>
                <h5>{name}</h5>
                <p className={style.type}>{type}</p>
                { isGift === false && <p className={style.gram}>{gram}g</p>}
                <input id={style.cart_num} type="number" name="cart_num" value="1" min="1"/>
            </div>
            <div className={style.price_wrap}>
                { isGift === true && <p>무료 증정</p>}
                { isGift === false && (
                    <div>
                        <p><span className={style.price}>{price}</span>원</p>
                        <button className={style.del_btn}>삭제</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default In_cart;