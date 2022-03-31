import { useState } from 'react';
import Slider from 'react-slick';
import ContCDMO from './ContCDMO';
import ContMRNA from './ContMRNA';
import ContPEPTIDE from './ContPEPTIDE';
import ContPEG from './ContPEG';
import ContMEDICINE from './ContMEDICINE';
import ContIMD from './ContIMD';
import ContCEPA from './ContCEPA';
import 'slick-carousel/slick/slick.css';
import '../../assets/scss/components/layout/_slider.scss';
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
    0: <ContCDMO idx='research1' />,
    1: <ContMRNA idx='research2'/>,
    2: <ContPEPTIDE idx='research3' />,
    3: <ContPEG idx='research4' />,
    4: <ContMEDICINE idx='research5' />,
    5: <ContIMD idx='research6' />,
    6: <ContCEPA idx='research7' />,
  }
  const [activeTab, setActiveTab] = useState(0);
  const tabClickHandler = (idx) => {
    setActiveTab(idx);
  }

  return (
    <section className="research">
      <h2 className="subsection__title">연구사업분야</h2>
      <p className="subsection__desc">세파 / 일반의약품 / 개량신약 / CDMO / Peptide & PEG</p>

      <Slider {...settings} className="com-slider">
       {tabTitle.map((title, idx) => {
          return (
            <button type="button" className={`research-tab research-tab${idx} ${activeTab === idx ? 'active' : ''}`} onClick={()=>tabClickHandler(idx)} key={idx}>{title}</button>
          )
        })}
      </Slider>
      {tab[activeTab]}
    </section>
  )
}

export default Research;
