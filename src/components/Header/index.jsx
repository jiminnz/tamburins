import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';

const Header = ({ isSub = false }) => {

    // 서브페이지일때 아닐때를 구분하여 css padding 다르게 적용하기
    let subPadding = {};
    let bagSubTop= {};
    if(isSub === true) {
        subPadding = {
            padding: "43px 44px 0"
        }; 
        bagSubTop = {
            top : "110px"
        };
    } else {
        subPadding = {
            padding : "0 44px"
        };
        bagSubTop = {
            top : "70px"
        };

    }
    

    // 쇼핑백 클릭시 사용되는 상태 변수, 함수
    const [ bagClick, setBagClick ] = useState(false);
    function openBag() {
        if(bagClick == true) {
            setBagClick(false);
            return 0;
        }

        setBagClick(true);
    }

    return (
        <header id={style.header} style={subPadding}>
            <h1 id={style.logo}>
                {/* <a href="/" title="tamburins 홈"> */}
                <Link to="/">
                    <svg className={style.logo_svg} xmlns="http://www.w3.org/2000/svg" width="150" height="18.562" viewBox="0 0 150 18.562">
                        <defs>
                            <clipPath id={style.clip_path}>
                                <rect id={style.사각형_3452} data-name="사각형 3452" width="150" height="18.561" fill="none"></rect>
                            </clipPath>
                        </defs>
                        <g id={style.TAMBURINS_LOGO_BK} data-name="TAMBURINS LOGO BK" clip-path="url(#clip-path)">
                            <path id={style.패스_1137} data-name="패스 1137" d="M16.344.387H0V4.305H.1a8.717,8.717,0,0,1,4.64-1.444H6.368V14a17.906,17.906,0,0,1-.155,2.217,10.7,10.7,0,0,1-.9,1.8v.155h5.723V18.02a10.7,10.7,0,0,1-.9-1.8A17.906,17.906,0,0,1,9.977,14V2.862H11.6a8.718,8.718,0,0,1,4.64,1.444h.1ZM14.858,18.02v.155H19.55v-.232a9.077,9.077,0,0,1-.516-1.341,9.513,9.513,0,0,1,.645-2.475l.206-.567H26.9l.206.619a9.571,9.571,0,0,1,.619,2.423,5.953,5.953,0,0,1-.541,1.418v.155h5.826V18.02L32.259,16.6a26.462,26.462,0,0,1-1.134-2.475L25.659.387h-3.48L16.791,14.127A25.774,25.774,0,0,1,15.683,16.6c-.232.438-.567,1.005-.825,1.418m5.775-6.471.8-2.14,2.037-5.182h.026l2.062,5.259.67,2.062ZM49.944.387,45.123,13.663h-.129L40.122.387H33.96V.541a10.684,10.684,0,0,1,.9,1.8,17.942,17.942,0,0,1,.155,2.217V14a17.942,17.942,0,0,1-.155,2.217,10.684,10.684,0,0,1-.9,1.8v.155h4.692V18.02a10.684,10.684,0,0,1-.9-1.8A17.94,17.94,0,0,1,37.6,14V4.228h.155l5.156,13.947H46.18l5-13.792h.129V14a17.906,17.906,0,0,1-.155,2.217,10.7,10.7,0,0,1-.9,1.8v.155h5.671V18.02a10.711,10.711,0,0,1-.9-1.8A17.942,17.942,0,0,1,54.868,14V4.563a17.942,17.942,0,0,1,.155-2.217,10.711,10.711,0,0,1,.9-1.8V.387Zm23.22,12.555c0-2.99-1.83-4.331-4.46-4.8V8.095c2.114-.851,3.248-2.037,3.248-3.79,0-2.449-2.114-3.738-6.29-3.893-.7-.026-1.573-.026-2.037-.026H58.263V.541a10.7,10.7,0,0,1,.9,1.8,17.906,17.906,0,0,1,.155,2.217V14a17.906,17.906,0,0,1-.155,2.217,10.7,10.7,0,0,1-.9,1.8v.155h8.3c3.893,0,6.6-1.5,6.6-5.233m-10.235,2.99V9.977h3.222c2.011,0,3.222.877,3.222,2.99,0,2.346-1.444,3.119-3.4,3.119Zm0-7.914V2.423h2.191c2.037,0,3.068.645,3.068,2.6a3.694,3.694,0,0,1-1.263,2.99Zm16.031,2.63V4.563a17.94,17.94,0,0,1,.155-2.217,10.685,10.685,0,0,1,.9-1.8V.387H74.294V.541a10.711,10.711,0,0,1,.9,1.8,17.943,17.943,0,0,1,.155,2.217V10.57c0,5.182,2.836,7.992,7.657,7.992,4.872,0,7.579-2.913,7.579-8.017V4.615a18.1,18.1,0,0,1,.155-2.269,10.685,10.685,0,0,1,.9-1.8V.387H86.668V.541a10.7,10.7,0,0,1,.9,1.8,18.07,18.07,0,0,1,.155,2.269v6.032c0,3.274-1.366,5.233-4.305,5.233-3.068,0-4.46-2.217-4.46-5.233m26.407,7.528h4.073v-.232l-5.568-8.121.18-.077c1.83-.748,4.357-2.713,3.867-5.053S105.5.387,102.093.387h-8.61V.541a10.7,10.7,0,0,1,.9,1.8,17.908,17.908,0,0,1,.155,2.217V14a17.908,17.908,0,0,1-.155,2.217,10.7,10.7,0,0,1-.9,1.8v.155h5.723V18.02a10.7,10.7,0,0,1-.9-1.8A17.9,17.9,0,0,1,98.149,14V10.7H99.7a5.837,5.837,0,0,0,.7-.026Zm-7.218-9.59V2.449h2.63c2.114,0,3.377.722,3.377,3.016a4.118,4.118,0,0,1-1.392,3.222c-.335.026-.876.026-1.212.026-.284,0-1.8-.052-3.4-.129M115.422,14V4.563a17.943,17.943,0,0,1,.155-2.217,10.7,10.7,0,0,1,.9-1.8V.387h-5.723V.541a10.685,10.685,0,0,1,.9,1.8,17.943,17.943,0,0,1,.155,2.217V14a17.943,17.943,0,0,1-.155,2.217,10.684,10.684,0,0,1-.9,1.8v.155h5.723V18.02a10.7,10.7,0,0,1-.9-1.8A17.943,17.943,0,0,1,115.422,14M131.284.387V.541a10.7,10.7,0,0,1,.9,1.8,17.94,17.94,0,0,1,.155,2.217v8.946h-.052L124.607.387h-5.775V.541a10.684,10.684,0,0,1,.9,1.8,17.94,17.94,0,0,1,.155,2.217V14a17.94,17.94,0,0,1-.155,2.217,10.684,10.684,0,0,1-.9,1.8v.155h4.744V18.02a10.7,10.7,0,0,1-.9-1.8A17.906,17.906,0,0,1,122.519,14V3.944h.052l8.456,14.23h3.944V4.563a17.9,17.9,0,0,1,.155-2.217,10.7,10.7,0,0,1,.9-1.8V.387Zm12.451,18.175c4.486,0,6.264-2.707,6.264-5.491,0-3.016-1.908-4.46-4.64-5.336l-.8-.258c-1.727-.567-3.274-1.083-3.274-2.758,0-1.753,1.676-2.4,3.042-2.4A6.1,6.1,0,0,1,149.1,4.666l.206-.077v-3.2A8.308,8.308,0,0,0,144.483,0c-3.506,0-6.651,1.882-6.651,5.362,0,2.269,1.34,4.047,4.408,5.13l.876.309c2.191.773,3.48,1.263,3.48,2.913,0,1.573-1.16,2.475-2.861,2.475a7.666,7.666,0,0,1-5.749-3.016l-.206.077v3.48c.954.954,2.939,1.83,5.955,1.83" fill="#040000"></path>
                        </g>
                    </svg>
                {/* </a> */}
                </Link>
            </h1>
            <div className={style.ul_wrap}>
                <ul id={style.gnb}>
                    {/* <li><a href="/categories/perfumebalm" title="제품 보기">제품 보기</a></li>
                    <li><a href="/categories/bestseller" title="베스트셀러">베스트셀러</a></li>
                    <li><a href="/categories/gift" title="선물 추천">선물 추천</a></li>
                    <li><a href="/*" title="매장 보기">매장 보기</a></li> */}
                    <li><Link to="/categories/perfumebalm">제품 보기</Link></li>
                    <li><Link to="/categories/bestseller">베스트셀러</Link></li>
                    <li><Link to="/categories/gift">선물 추천</Link></li>
                    <li><Link to="/*">매장 보기</Link></li>
                </ul>
                <ul className={style.sub_gnb}>
                    <li className={`${style.sub_icon} ${style.search}`}>
                        {/* <a href="#none" title="검색"> */}
                        <Link to="/*">
                            <svg version="1.1" baseProfile="basic" id={style.레이어_1} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                                <path d="M13.5,24.1c-5.8,0-10.6-4.8-10.6-10.6S7.7,2.9,13.5,2.9s10.6,4.8,10.6,10.6S19.3,24.1,13.5,24.1z M13.5,4.1
                                c-5.2,0-9.4,4.2-9.4,9.4c0,5.2,4.2,9.4,9.4,9.4c5.2,0,9.4-4.2,9.4-9.4C22.9,8.3,18.7,4.1,13.5,4.1z"></path>
                                <rect x="21.2" y="20.7" transform="matrix(0.787 -0.617 0.617 0.787 -10.2878 18.6108)" width="1.2" height="7.1"></rect>
                            </svg>
                        {/* </a> */}
                        </Link>
                    </li>
                    {/* <li><a href="/*" title="마이페이지">마이페이지</a></li>
                    <li><a href="/login" title="로그인">로그인</a></li> */}
                    <li><Link to="/*">마이페이지</Link></li>
                    <li><Link to="/login">로그인</Link></li>
                    <li className={`${style.sub_icon} ${style.bag}`} onClick={openBag}>
                        { !bagClick && (
                            // <a href="#none" title="장바구니">
                            <Link to="">
                                <svg version="1.2" baseProfile="tiny" id={style.레이어_1} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                                    <path d="M20.7,8.9c0.1-1.3,0.1-4.5-1.7-6.5c-1-1.1-2.3-1.6-3.9-1.6c-1.7,0-3,0.6-3.9,1.6c-1.7,2-1.8,5.2-1.7,6.5H3.6v19.8h22.9V8.9
                                    H20.7z M12,3.3c0.7-0.8,1.7-1.2,3-1.2c1.3,0,2.3,0.4,3,1.2c1.5,1.7,1.5,4.6,1.4,5.7h-8.9C10.6,7.9,10.5,5,12,3.3z M25.2,27.6H4.8
                                    V10.1h20.5V27.6z"></path>
                                </svg>
                                <span className={style.bag_num}>0</span>
                            {/* </a> */}
                            </Link>
                        )}
                        { bagClick && (
                            <div className={style.close_btn}>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
            { bagClick && (
                <div className={style.bag_window} style={bagSubTop}>
                    <p>장바구니</p>
                    <div className={style.list_wrap}>
                        <div>장바구니에 담긴 상품이 없습니다.</div>
                    </div>
                    <div className={style.button_wrap}>
                        <div className={style.order}>
                            {/* <a href="#none" title="주문 하기">주문 하기</a> */}
                            <Link to="/*">주문 하기</Link>
                        </div>
                        <div className={style.shop}>
                            {/* <a href="/cart" title="쇼핑백 확인하기">쇼핑백 확인하기</a> */}
                            <Link to="/cart">쇼핑백 확인하기</Link>
                        </div>
                    </div>
                </div>
            )}
            { isSub === true && (
                <div className={style.sub_slide_wrap}>
                    <div className={style.slide_wrap}>
                        <div className={style.top_slide}>
                            <button id={style.prev}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8.707" height="5.061" viewBox="0 0 8.707 5.061">
                                    <path fill="none" stroke="#fff" d="M-1715.783 4188.551l4 4 4-4" transform="translate(1716.137 -4188.197)"></path>
                                </svg>
                            </button>
                            <div id={style.slide_window}>
                                <ul id={style.slide_ul}>
                                    <li className={style.slide_text}>모든 제품 구매 시 화이트다즐링 2ml 샘플 증정</li>
                                    <li className={style.slide_text}>모든 제품 구매 시 화이트다즐링 2ml 샘플 증정</li>
                                    <li className={style.slide_text}>모든 제품 구매 시 화이트다즐링 2ml 샘플 증정</li>
                                </ul>
                            </div>
                            <button id={style.next}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8.707" height="5.061" viewBox="0 0 8.707 5.061">
                                    <path fill="none" stroke="#fff" d="M-1715.783 4188.551l4 4 4-4" transform="translate(1716.137 -4188.197)"></path>
                                </svg>
                            </button>
                        </div>
                        <button id={style.slide_close}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className={style.popup_bg}></div>
                    <div className={style.popup_window}>
                        <p className={style.img_wrap}>
                            <img src="../../assets/popup.jpeg" alt="모든 제품 구매 시 화이트다즐링 2ml 샘플 증정"/>
                        </p>
                        <div className={style.desc_wrap}>
                            <div className={style.text_wrap}>
                                <p>모든 제품 구매 시 화이트다즐링 2ml 샘플 증정</p>
                                <span>
                                    2/15(수)부터 10:00 ~ 3/31(금) 09:59 까지<br/>
                                    샘플, 손 소독제 30mL 단품을 제외한 모든 제품을 구매하시는 고객분들에게<br/>
                                    화이트다즐링 미니 퍼퓸 2ml 샘플을 증정합니다.<br/><br/>
                                    <span className={style.gray}>
                                        *구매 수량과 관계없이 주문 건당 세트 1매가 증정됩니다.<br/>
                                        *조기 소진시 마감 될 수 있습니다.
                                    </span>
                                </span>
                            </div>
                            <div className={style.button_wrap}>
                                {/* <a href="#none" title="자세히 보기">자세히 보기</a> */}
                                <Link to="/*">자세히 보기</Link>
                                <button id={style.pop_close}>닫기</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;