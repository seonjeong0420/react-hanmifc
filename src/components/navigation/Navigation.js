import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.scss';

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const mouseHover = () => {
    setIsActive(true);
  }
  const mouseLeave = () => {
    setIsActive(false);
  }
  let location = useLocation();

  return (
    <nav className={`navbar ${isActive ? "hover" : ""} ${location.pathname !== "/" ? "active" : ""}`}>
      <div className="navbar__inner">
        <div className="navbar__logo">
          <a href="/" className="">한미정밀화학 로고</a>
        </div>
        <ul className="navbar__menu" onMouseEnter={mouseHover} onMouseLeave={mouseLeave}>
          <li className="navbar__item">
            <a href="/about/ceo"  rel="noopenner noreferrer">회사소개</a>
          </li>
          <li className="navbar__item">
            <a href="/product"  rel="noopenner noreferrer">사업 및 제품</a>
          </li>
          <li className="navbar__item">
            <a href="/develop/develop" rel="noopenner noreferrer">연구개발</a>
          </li>
          <li className="navbar__item">
            <a href="/quality/quality" rel="noopenner noreferrer">품질&amp;시설</a>
          </li>
          <li className="navbar__item">
            <a href="/recruit/recruit" rel="noopenner noreferrer">인재채용</a>
          </li>
          <li className="navbar__item">
            <a href="/notice/notice" rel="noopenner noreferrer">소식&amp;공고</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
