import React from 'react';
import style from './item.module.css';

const Item = ({ desc, img1, img2, name, price, gram, size }) => {
    return (
        <div className={style.item}>    
            <div className={style.img_wrap}>
                <img src={img1} alt={name}/>
                <img className={style.simple_img} src={img2} alt={name}/>
            </div>
            <div className={style.text_wrap}>
                <span className={style.desc}>{desc}</span>
                <h5>{name}</h5>
                <div className={style.price_wrap}>
                    <div>
                        <p className={style.price}><span id={style.price_num}>{price}</span>원</p>
                        <p className={style.gram}>{gram}</p>
                    </div>
                    <p className={style.size}>+<span id={style.size_num}>{size}</span> Size</p>
                </div>
            </div>
        </div>
    );
}

export default Item;