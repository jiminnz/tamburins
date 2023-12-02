import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './sub_cart.module.css'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import In_cart from '../../components/In_cart';

const Sub_cart = () => {
    
    // 장바구니 리스트 
    // { img, name, type, gram, price }
    const [ cartList, setCartList ] = useState([
        {
            isGift : false,
            img : 'https://web-resource.tamburins.com/item/1666772156/1667896848_4261_PLP_balm_6g_chamo.jpg',
            name : '퍼퓸 밤 카모',
            type : '퍼퓸 밤',
            gram : '6.5',
            price : '46,500'
        },
        {
            isGift : true,
            img : 'https://web-resource.tamburins.com/item/1695343397_GWP(CART)_showerybody_wash_fog_5ml.jpg',
            name : '기프트 서비스',
            type : '샤워리바디 바디워시 FOG 5mL'
            // gram : '',
            // price : '무료 증정'       
        },
        {
            isGift : true,
            img : 'https://web-resource.tamburins.com/item/1695343427_GWP(CART)_showerybody_lotion_fog_5ml.jpg',
            name : '기프트 서비스',
            type : '샤워리바디 바디로션 FOG 5mL'
            // gram : '',
            // price : '무료 증정'       
        }
    ])

    return ( 
        <div>
            <Header isSub={false}/>
            <div id={style.container}>
                <div className={style.cart_wrap}>
                    <h4>
                        쇼핑백
                        <span className={style.cart_num_box}>(<span className={style.shop_num}>1</span>개)</span>
                    </h4>
                    <ul id={style.cart_in_item}>
                        {cartList.map((item)=>{
                            return(
                                <li>
                                    <In_cart isGift={item.isGift} img={item.img} name={item.name} 
                                    type={item.type} gram={item.gram} price={item.price}/>
                                </li>
                            )
                        })}
                    </ul>
                    <div className={style.no_cart}>장바구니에 담긴 상품이 없습니다.</div>
                </div>
                <div className={style.payment_wrap}>
                    <h4>결제내역</h4>
                    <ul>
                        <li>
                            <h5>주문 금액</h5>
                            <p><span className={style.cart_price}>46500</span>원</p>
                        </li>
                        <li>
                            <h5>배송비</h5>
                            <p>
                                <span className={style.delivery_desc}>3만원 이상 구매시 무료배송</span>
                                <span className={style.delivery_price}>0</span>원
                            </p>
                        </li>
                        <li>
                            <h5>총 금액</h5>
                            <p><span className={style.total_price}>46500</span>원</p>
                        </li>
                    </ul>
                    <div>
                        {/* <a id={style.keep_order} href="#none">주문 계속하기</a>
                        <a id={style.keep_shop} href="#none">쇼핑 계속하기</a> */}
                        <Link id={style.keep_order} to="">주문 계속하기</Link>
                        <Link id={style.keep_shop} to="">쇼핑 계속하기</Link>
                    </div>
                    <div className={style.caution_wrap}>
                        <p>· 주문일로부터 1-2 영업일 이내 출고됩니다.</p>
                        <p>· 환경부 고시에 따라, 기본 쇼핑백이 제공되지 않습니다.</p>
                        <p>
                            ·  일부 택배사의 휴무(8/13~15)로 배송 및 수거가 지연될 수 있습니다. 휴무일 이후
                            순차적으로 진행될 예정이니 양해부탁드립니다.
                        </p>
                    </div>
                </div>
            </div>
            <Footer isSub={true}/>
        </div>
    );
}

export default Sub_cart;