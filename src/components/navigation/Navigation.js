import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.scss';
import dummy from '../../db/data.json';

const Navigation = () => {
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
          {dummy.menus.map( (menu) => (
            <li key={menu.id} className="navbar__item">
              <a href={menu.url} className={location.pathname===menu.url ? "active" : ""} rel="noopener noreferrer">{menu.type}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
