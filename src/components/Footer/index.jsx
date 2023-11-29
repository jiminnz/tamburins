import React from 'react';
import style from './footer.module.css';

const Footer = ({ isSub = false }) => {
    return (
        <div id={style.footer_wrap}>
            { isSub === true && (
                <div className={style.sub_footer}>
                    <dl>
                        <dt>선물추천</dt>
                        <dd><a href="#none" alt="온라인 서비스">온라인 서비스</a></dd>
                    </dl>
                    <dl>
                        <dt>고객센터</dt>
                        <dd><a href="#none" alt="공지사항">공지사항</a></dd>
                        <dd><a href="#none" alt="주문 배송 조회">주문 배송 조회</a></dd>
                        <dd><a href="#none" alt="적립금 현황">적립금 현황</a></dd>
                        <dd><a href="#none" alt="고객서비스">고객서비스</a></dd>
                        <dd><a href="#none" alt="자주 묻는 질문">자주 묻는 질문</a></dd>
                        <dd><a href="#none" alt="1:1문의하기">1:1문의하기</a></dd>
                    </dl>
                    <dl>
                        <dt>소셜</dt>
                        <dd><a href="#none" alt="Instagram">Instagram</a></dd>
                        <dd className={style.kakao}>
                            <a href="#none" alt="Kakaotalk">
                                <span className={style.basic}>Kakaotalk</span>
                                <span className={style.hover}>카카오톡 플러스 친구 추가하고 3,000원 혜택 받기</span>
                            </a>
                        </dd>
                        <dd><a href="#none" alt="Weibo">Weibo</a></dd>
                        <dd><a href="#none" alt="Facebook">Facebook</a></dd>
                    </dl>
                </div>
            )}
            <footer id={style.footer}>
                <ul className={style.info}>
                    <li>주&#41;아이아이컴바인드</li>
                    <li>사업자등록번호: 119-86-38589</li>
                    <li>대표자: 김한국</li>
                    <li>서울특별시 마포구 어울마당로5길 41</li>
                    <li>대표번호: 1644-1246</li>
                    <li>이메일: cs@tamburins.com</li>
                </ul>
                <ul className={style.info}>
                    <li>개인정보 보호 책임자: 정태호</li>
                    <li>호스팅 서비스 사업자: Aws</li>
                    <li>통신판매업신고: 제 2014-서울마포-1050 호 <a href="#none" title="사업자정보확인">(사업자정보확인)</a></li>
                    <li><a href="#none" title="개인정보처리방침">개인정보처리방침</a></li>
                    <li><a href="#none" title="이용약관">이용약관</a></li>
                </ul>
                <p>고객님의 안전한 현금자산 거래를 위하여 하나은행과 채무지급보증계약을 체결하여 보장해드리고 있습니다. <a href="#none" title="서비스 가입사실 확인">서비스 가입사실 확인</a></p>
                <ul>
                    <li>&#169; 탬버린즈</li>
                    <li>대한민국</li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;