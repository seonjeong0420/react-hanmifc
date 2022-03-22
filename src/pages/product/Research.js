import { useState } from 'react';
import Slider from 'react-slick';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Content7 from './Content7';
import 'slick-carousel/slick/slick.css';
import './Product.scss';

const Research = () => {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    arrows: true,
    slidesToShow: 5
  }

  const tabTitle = ['CDMO', 'mRNA', 'Peptide', 'PEG', '일반의약품', '개량신약', '세파'];
  const tab = {
    0: <Content1 />,
    1: <Content2 />,
    2: <Content3 />,
    3: <Content4 />,
    4: <Content5 />,
    5: <Content6 />,
    6: <Content7 />,
  }
  const [activeTab, setActiveTab] = useState(0);
  const tabClickHandler = (idx) => {
    setActiveTab(idx);
  }

  return (
    <div className="research">
      <h2 className="subsection__title">연구사업분야</h2>
      <p className="subsection__desc">세파 / 일반의약품 / 개량신약 / CDMO / Peptide & PEG</p>

      <Slider {...settings} className="com-slider">
       {tabTitle.map((title, idx) => {
          return (
            <button type="button" className={`tab ${activeTab === idx ? 'active' : ''}`} onClick={()=>tabClickHandler(idx)} key={idx}>{title}</button>
          )
        })}
      </Slider>
      <div>
        {tab[activeTab]}
      </div>
    </div>
  )
}

export default Research;
