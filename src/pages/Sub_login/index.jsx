import React from 'react';
import { Link } from 'react-router-dom';
import style from './sub_login.module.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Sub_login = () => {
    return (
        <div>
            <Header/>
            <div id={style.container}>
                <div className={style.login_wrap}>
                    <h4>로그인</h4>
                    <div>
                        <form>
                            <div className={style.login}>
                                <div className={style.input_id}>   
                                    <label for="user_id">아이디</label>
                                    <input type="text" id={style.user_id} name="user_id"/>
                                </div>
                                <div className={style.input_pw}>   
                                    <label for="user_pw">비밀번호</label>
                                    <input type="text" id={style.user_pw} name="user_pw"/>
                                </div>
                            </div>
                            <div className={style.button_wrap}>
                                <input type="submit" value="로그인"/>
                                <div className={style.sns_button}>
                                    <button>네이버 로그인</button>
                                    <button>카카오 로그인</button>
                                </div>
                                <div>
                                    {/* <a href="#none" title="아이디 또는 비밀번호 찾기">아이디 또는 비밀번호 찾기</a> */}
                                    <Link to="/*">아이디 또는 비밀번호 찾기</Link>
                                    <span>|</span>
                                    {/* <a href="#none" title="회원가입">회원가입</a>
                                    <a href="#none" title="비회원 주문조회">비회원 주문조회</a> */}
                                    <Link to="/*">회원가입</Link>
                                    <Link to="/*">비회원 주문조회</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={style.join_wrap}>
                    <h4>회원가입</h4>
                    <p>회원가입 시 즉시 사용 가능한 3,000원 혜택을 드립니다.</p>
                    {/* <a href="#none" title="신규 회원가입">신규 회원가입</a> */}
                    <Link to="/*">신규 회원가입</Link>
                </div>
            </div>
            <Footer isSub={true}/>
        </div>
    );
}

export default Sub_login;