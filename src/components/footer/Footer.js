import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../assets/images/logo_footer.png';

export default function Footer() {
  const [isShow, setIsShow] = useState(false);
  const showClick = () => {
    setIsShow(!isShow);
  }

  return (
    <footer className="footer">
      <div className="inner">
        <nav className="footer__link">
          <Link to="/Intro/Ceo" rel="noopenner noreferrer">회사소개</Link>
          <Link to="/Customer" rel="noopenner noreferrer">사업 및 제품</Link>
          <Link to="/Qna" rel="noopenner noreferrer">연구개발</Link>
          <Link to="/Certification" rel="noopenner noreferrer">품질&amp;시설</Link>
          <Link to="/Recruit" rel="noopenner noreferrer">인재채용</Link>
          <Link to="/Notice" rel="noopenner noreferrer">소식&amp;공고</Link>
        </nav>
        <div className="footer__info">
          <img src={logo} alt="한미정밀화학 로고" />
          <address>경기도 시흥시 경제로 57(정왕동) 전화 <b>031-499-2541</b> 팩스 <b>031-499-2540</b></address>
          <p>&copy;HANMI FINE CHEMICAL CORPORATION. ALL RIGHT RESERVED</p>
        </div>
        <div className={`footer__familysite ${isShow ? 'active' : ''}`} onClick={showClick}>
          <button type="button">FAMILY SITE</button>
          <nav>
            <a href="#none"  rel="noopenner noreferrer">한미사진미술관</a>
            <a href="#none" rel="noopenner noreferrer">JVM</a>
            <a href="#none" rel="noopenner noreferrer">한미약품 화장품 프로캄</a>
            <a href="#none" rel="noopenner noreferrer">온라인팜(주)</a>
            <a href="#none" rel="noopenner noreferrer">한미헬스케어(주)</a>
            <a href="#none" rel="noopenner noreferrer">북경한미유한공사</a>
            <a href="#none" rel="noopenner noreferrer">한미사이언스</a>
          </nav>
        </div>
        <a href="#none" className="footer__link-contact">CONTACT US</a>
      </div>
    </footer>
  )
}