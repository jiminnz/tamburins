import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './sub_item.module.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Item from '../../components/Item';

const Sub_item = () => {

    // 추천 상품 리스트
    const [ recommendList, setRecommendList ] = useState([
        {
            img : 'https://web-resource.tamburins.com/item/1666763525/PLP_shellX_30ml_chamo.jpg?test2=2',
            desc : '진득한 카모마일 | 부드러운 나무결 | 머스크',
            title : '퍼퓸 쉘 엑스 카모',
            price : '32,000',
            size : 1
        },
        {
            img : 'https://web-resource.tamburins.com/item/1662462491/PLP_perfume_chamo_10ml.jpg?test2=2',
            desc : '진득한 카모마일 | 부드러운 나무결 | 머스크',
            title : '퍼퓸 카모',
            price : '36,500',
            size : 3
        },
        {
            img : 'https://web-resource.tamburins.com/item/1662462471/PLP_perfume_chamo_50ml.jpg?test2=2',
            desc : '진득한 카모마일 | 부드러운 나무결 | 머스크',
            title : '퍼퓸 카모',
            price : '139,000',
            size : 3
        },
        {
            img : 'https://web-resource.tamburins.com/item/1662459337/PLP_perfume_chamo_100ml.jpg?test2=2',
            desc : '진득한 카모마일 | 부드러운 나무결 | 머스크',
            title : '퍼퓸 카모',
            price : '219,000',
            size : 3
        }
    ]);

    return(
        <div>
            <Header isSub={true} />
            <div id={style.container}>
                <div className={style.main_wrap}>
                    <div className={style.img_desc_wrap}>
                        <ul>
                            <li>
                                <img src="https://web-resource.tamburins.com/item/1666772156/PDP_balm_6g_chamo_0.jpg" alt="퍼퓸 밤 카모"/>
                            </li>
                            <li>
                                <img src="https://web-resource.tamburins.com/item/1666772156/PDP_balm_6g_chamo_1.jpg" alt="퍼퓸 밤 카모"/>
                            </li>
                            <li>
                                <img src="https://web-resource.tamburins.com/item/1666772156/PDP_balm_6g_chamo_2.jpg" alt="퍼퓸 밤 카모"/>
                            </li>
                            <li>
                                <img src="https://web-resource.tamburins.com/item/1666772156/PDP_balm_6g_chamo_3_v2.jpg" alt="퍼퓸 밤 카모"/>
                            </li>
                        </ul>
                    </div>
                    <div className={style.item_desc_wrap}>
                        <div>
                            <span className={style.category}>퍼퓸 밤</span>
                            <div className={style.title_wrap}>
                                <h3 id={style.title}>퍼퓸 밤 카모</h3>
                                <span className={style.price}>46,500원</span>
                            </div>
                            <ul className={style.small_item_wrap}>
                                <li>
                                    <div className={style.img_wrap}>
                                        <img src="https://web-resource.tamburins.com/item/1666772156/1667896848_4078_PLP_balm_6g_chamo.jpg?img1=121" alt="퍼퓸 밤 카모"/>
                                    </div>
                                    <span className={style.gram}>6.5g</span>
                                </li>
                            </ul>
                            <div className={style.desc_text_wrap}>
                                <p>진득한 카모마일 | 부드러운 나무결 | 머스크</p>
                                <span>
                                    꿀처럼 진득하고 달콤한 카모마일과 씁쓸한 클라리세이지의 허브 향이 오묘한 조화를 이루어 중독성 있는 향을 선사합니다.
                                    자칫 차갑게 느껴질 수 있는 촉촉한 이끼의 느낌을 우아하고 부드러운 나무결의 블론드 우드와 따뜻한 머스크로 감싸주어 
                                    당신의 지친 마음에 특별하고 작은 위안을 선물합니다.<br/>
                                    <span className={style.hide_text}>
                                        감각적으로 향을 즐길 수 있는 새로운 형태의 퍼퓸밤.
                                        핸디한 사이즈의 퍼퓸 밤과 함께 어디서든 자유롭게 향을 경험하고 스스로를 표현해보세요.
                                        부드러운 텍스처로 맥박이 뛰는 손목, 귀밑 등에 부드럽게 발라주면 체온에 의해 은은하게 퍼지는 향을 느끼실 수 있습니다.
                                        아이코닉한 퍼퓸 밤 디자인은 탬버린즈 퍼퓸의 일부가 미러링된 형태로 퍼퓸의 페르소나를 표현합니다.<br/>
                                    </span>
                                </span>
                                <button id={style.plus_desc}>퍼퓸 밤 더보기</button>
                            </div>
                            <Link to="/cart"><button id={style.into_bag}>장바구니에 담기</button></Link>
                            <p className={style.etc_text}>35,000원 이상 구매 시 토일렛프래그런스 오브제 세트 증정</p>
                        </div>
                        <div className={style.info_wrap}>
                            <ul>
                                <li>
                                    <div className={style.info_title}>
                                        <h4>온라인 익스클루시브 혜택</h4>
                                        <div className={style.plus_info}>
                                            <span></span>
                                            <span className={style.plus_move}></span>
                                        </div>
                                    </div>
                                    <div className={style.info_desc}>
                                        탬버린즈는 고객님들께 빠른 배송 및 반품과 최고의 경험을 제공하기 위해 언제나 세심한 주의를 기울입니다.
                                        고객님을 위한 익스클루시브 서비스를 경험해보세요.<br/><br/>
                                        <p><span className={style.circle}>·</span> 회원가입 및 카카오톡 플러스 친구 추가 시 바로 사용 가능한 3,000원 혜택</p>
                                        <p><span className={style.circle}>·</span> 구매 금액의 2% 적립</p>
                                        <p><span className={style.circle}>·</span> 생일 축하 5,000 포인트 혜택 (1년 이내 구매 이력 있을 시)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={style.info_title}>
                                        <h4>제품 세부 정보</h4>
                                        <div className={style.plus_info}>
                                            <span></span>
                                            <span className={style.plus_move}></span>
                                        </div>
                                    </div>
                                    <div className={style.info_desc}>
                                        <div>
                                            <p>전성분</p>
                                            카프릴릭/카프릭트라이글리세라이드, 향료, 다이메티콘, 마이크로크리스탈린왁스, 파라핀, 페닐트라이메티콘,
                                            벤질살리실레이트, 합성왁스, 비에이치티, 리날룰, 쿠마린, 제라니올, 리모넨, 벤질알코올, 유제놀
                                        </div>
                                        <div>
                                            <p>사용방법</p>
                                            용기 하단을 돌려 내용물을 끌어올려 손목, 귀 뒤 등 맥박이 뛰는 부위에 가볍게 발라줍니다.
                                        </div>
                                        <div>
                                            <p>사용할 때의 주의사항</p>
                                            1. 손목 등에 가볍게 테스트 후 사용하세요.<br/>
                                            2. 사용 시 묻어날 수 있으니 잘 흡수시켜 사용해주세요.<br/>
                                            3. 제형 특성상 온도에 민감하여 고온 보관시 스웨팅 현상이 발생할 수 있으니 유의해주세요.<br/>
                                            <span className={style.star}>*</span>본 제품에 이상이 있을 경우 공정거래위원회 고시 소비자 분쟁 해결 기준에 의해 보상해 드립니다.
                                        </div>
                                        <div>
                                            <p>사용기한</p>
                                            사용기한 24개원(상품 발송일 기준으로 사용기한이 12개월 이상 남은 상품만을 판매합니다.)
                                        </div>
                                        <div>
                                            <p>제조업자</p>
                                            코스맥스(주)
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={style.info_title}>
                                        <h4>배송 &amp; 반품</h4>
                                        <div className={style.plus_info}>
                                            <span></span>
                                            <span className={style.plus_move}></span>
                                        </div>
                                    </div>
                                    <div className={style.info_desc}>
                                        3만원 이상 구매하실 경우 배송 비용은 무료입니다.<br/><br/>
                                        <span className={style.red}>주문일로부터 1-2 영업일 이내 출고됩니다.</span><br/><br/>
                                        <div>
                                            배송은 지역 택배사 사정에 따라 약간의 지연이 생길 수 있습니다. 
                                            배송이 시작되면 구매자에게는 이메일, 수령인에게는 카카오 알림톡으로 배송 정보를 전송해드립니다.<br/>
                                            CJ대한통운(https://www.cjlogistics.com)
                                        </div>
                                        <span className={style.star}>*</span>상품 혹은 증정품의 포장(랩핑)을 개봉 및 훼손한 경우 반품이 불가합니다.
                                        <span className={style.star}>*</span>단순 변심 또는 주문 실수로 인한 교환이 불가합니다. 신중한 구매 부탁드립니다.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.recommend_wrap}>
                    <h4>추천상품</h4>
                    <ul>
                        {recommendList.map((item) => {
                            return(
                                <Item desc={item.desc} img1={item.img} name={item.title}
                                price={item.price} gram={item.gram} size={item.size}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <Footer isSub={true}/>
        </div>
    );
}

export default Sub_item;