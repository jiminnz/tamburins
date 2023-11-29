import React from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './sub_category.module.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Item from '../../components/Item';
import db_list from '../../db/sub_list.json';


const Categories = () => { 

    // 현재 주소에 맞는 데이터 불러오기
    const current_params = useParams();
    const filter_list = db_list.category_list.filter(e => e.title === current_params.title);
    const current_list = filter_list[0];

    console.log(current_params);
    console.log(filter_list);
    console.log(current_list);

    // 카테고리 동그라미들에 들어갈 스타일 객체 선언
    const cate_style = {
        border : "1px solid rgba(0, 0, 0, 1)"
    }

    // 각 카테고리에 해당하는 아이템 정보들 넣어서 아이템 객체 만들기
    const createItem = (list) => {
        return(
            list.map((item) => {
                {/* desc, img1, img2, name, price, gram, size 적기 */}
                return (
                    <li key={item.id}>
                        <Link to="/item">
                            <Item desc={item.desc} img1={item.img} img2={item.img} name={item.name} 
                            price={item.price} gram={item.gram} size={item.size}/>
                        </Link>
                    </li>
                    
                )
            })
        )
    }

    // 간략히보기 클릭시 item컴포넌트에 className 추가해서 스타일 적용하기


    return (
        <div>
            <Header isSub={true}/>
            <div id={style.container}>
                <div id={style.category_wrap}>
                    <ul>
                        {db_list.category_title.map(item => {
                            return (
                                <li key={item.id} className={style.category}>
                                    <Link to={`/categories/${item.title}`}>
                                        <p style={item.title === current_params.title ? cate_style : {}}>
                                            <img src={item.img} alt={item.title}/>
                                        </p>
                                        <span>{item.title_kor}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div id={style.desc_wrap}>
                    <div className={style.img_wrap}>
                        <img src={current_list.ca_img} alt={current_list.ca_title} />
                    </div>
                    <div className={style.text_wrap}>
                        <h3>{current_list.ca_title}</h3>
                        <div>
                            {current_list.ca_desc}
                        </div>
                    </div>
                </div>
                <div id={style.item_wrap}>
                    <div className={style.title}>
                        <h4>{current_list.ca_name} <span>(<span className={style.count}>{current_list.ca_num}</span>)</span></h4>
                        <button id={style.simple}>간략보기</button>
                    </div>
                    <ul id={style.item_list}>
                        {createItem(current_list.arr)}
                    </ul>
                </div>
            </div>
            <Footer isSub={true}/>
        </div>
    );
}

export default Categories;