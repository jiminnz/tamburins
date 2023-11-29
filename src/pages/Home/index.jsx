import React from 'react';
import { Link } from 'react-router-dom';

import style from './home.module.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Main = () => {
    return (
        <div id={style.app}>
            <Header isSub={false}/>   
            <div id={style.container}>
                <div className={style.img_wrap}>
                    <div>
                        <img src={process.env.PUBLIC_URL + 'assets/images/home/main_adv0.jpeg'} alt="메인 광고 이미지0"/>  
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + 'assets/images/home/main_adv1.jpeg'} alt="메인 광고 이미지1"/>
                    </div>
                </div>
                <div className={style.bg}></div>
                <div className={style.text_wrap}>
                    <h3>PERFUME BALM</h3>
                    <div>
                        {/* <a href="./PerfumeBalm/index.html" title="신제품 보기">신제품 보기</a> */}
                        <Link to="/categories/perfumebalm"><button>신제품 보기</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>  
    );
}

export default Main;