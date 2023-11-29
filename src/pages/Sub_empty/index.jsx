import React from 'react';
import { Link } from 'react-router-dom';
import style from './sub_empty.module.css';

const Sub_empty = () => {
    return(
        <div className={style.empty_wrap}>
            <div className={style.background}>
                <h2>페이지를 찾을 수 없습니다.</h2>
                <Link to="/" className={style.home_btn}>홈으로 가기</Link>
            </div>
        </div>
    );
}

export default Sub_empty;