import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import AOS from 'aos';
import './Main.scss';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import imgCompany from '../../assets/images/main/img_solution.jpg';

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Main = () => {
  const sliderRef = useRef();
  const sectionRefs = useRef([]);
  sectionRefs.current = [];
  let scrollTween;

  const addToRefs = el => {
    if(el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  const goToSection = (i, el) => {
    if(i === 2) {
      sliderRef.current.slickGoTo(0);
    }
    if(i > 0) {
      document.querySelector('.App').classList.add('down');
    } else {
      document.querySelector('.App').classList.remove('down');
    }

    scrollTween = gsap.to(window, {
      scrollTo: {
        y: el.clientHeight * i,
        autoKill: false
      },
      duration:.5,
      onComplete: function () {
        return scrollTween = null;
      },
      overwrite: true
    });
  }

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: '+=200%',
        onToggle: function(self) {
          return self.isActive && !scrollTween && goToSection(index, el);
        }
      })
    })
  })

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed:5000,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    afterChange: () => {
      document.querySelector('.progressbar').classList.add('animation');
    },
    beforeChange: () => {
      document.querySelector('.progressbar').classList.remove('animation');
    }
  }

  useEffect(() => {
    AOS.init();
  });

  return (
    <main>
      <section className="visual" ref={addToRefs}>
        <h1 className="visual__title">
          <sup data-aos="fade-up" data-aos-duration="1500">Dream the more innovation, Create the better future</sup>
          <strong data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">더 나은 미래를 꿈꾸어 가는 한미정밀화학</strong>
        </h1>
        <div className="visual__video">
          <ReactPlayer url={[
            {src:"https://data.hanmi.co.kr/fc_hanmi/fc_main.webm", type:"video/webm"}
          ]} width="100%" height="100%" playing={true} loop={true} muted={true}></ReactPlayer>
        </div>
      </section>
      <section className="subvisual solution" ref={addToRefs}>
        <div className="inner">
          <h1 className="solution__title" data-aos="fade-right" data-aos-duration="1000">
            <sup>인간존중과 가치창조</sup>
            <strong>Globalization<br />Creative the better future<br />Hanmifc solution</strong>
          </h1>
          <div className="solution__intro" data-aos="fade-left" data-aos-duration="1000">
            <h2 className="blind">회사소개로 이동</h2>
            <figure>
              <img src={imgCompany} alt="회사 이미지" />
              <figcaption>
                <p>한미정밀화학은 인류의 더 나은 건강을 위해서 연구개발에 힘쓰며 전세계로 원료의약품 수출하는 대한민국 제약회사입니다.</p>
                <a href="#none" className="solution__intro-link">MORE +</a>
              </figcaption>
            </figure>
          </div>
          <div className="solution__business">
            <h2>BUSINESS FIELD</h2>
            <nav className="business__list">
              <a href="#none" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500">CDMO</a>
              <a href="#none" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">mRNA</a>
              <a href="#none" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">Peptide</a>
              <a href="#none" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700">PEG</a>
              <a href="#none" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">일반의약품</a>
              <a href="#none" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1100">개량신약</a>
              <a href="#none" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1300">세파</a>
              <a href="#none" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500">분석기술지원</a>
            </nav>
          </div>
        </div>
      </section>
      <section className="subvisual service" ref={addToRefs}>
        <div className="inner">
          <Slider {...settings} ref={sliderRef}>
            <div className="service__info">
              <img src="https://www.hanmifc.co.kr/images/pc/main/img_slider1.jpg" alt="슬라이드 이미지" />
              <div className="box">
                <span className="animation-txt">
                  <h1 className="title">Create the Better Future</h1>
                </span>
                <span className="animation-txt">
                  <span className="desc">한미정밀화학은 연구개발에 대한 끊임없는 열정으로 글로벌 의약품 원료물질 기업으로 발전하기 위해 노력하고 있습니다.</span>
                </span>
              </div>
            </div>
            <div className="service__info">
              <img src="https://www.hanmifc.co.kr/images/pc/main/img_slider2.jpg" alt="슬라이드 이미지" />
              <div className="box">
                <span className="animation-txt">
                  <h1 className="title">Advanced Quality System</h1>
                </span>
                <span className="animation-txt">
                  <span className="desc">한미정밀화학은 글로벌 GMP 요구 규정을 준수하고 우수한 품질관리시스템을 운영하고 있습니다.</span>
                </span>
              </div>
            </div>
            <div className="service__info">
              <img src="https://www.hanmifc.co.kr/images/pc/main/img_slider3.jpg" alt="슬라이드 이미지" />
              <div className="box">
                <span className="animation-txt">
                  <h1 className="title">Optimized cGMP Facility</h1>
                </span>
                <span className="animation-txt">
                  <span className="desc">한미정밀화학은 세계 최고 품질의 원료의약품 생산 전문 기업입니다.</span>
                </span>
              </div>
            </div>
          </Slider>
          <div className="box-progressbar">
            <i className="progressbar animation"></i>
          </div>
        </div>
      </section>
      <section className="subvisual recruit" ref={addToRefs}>
        <div className="inner">
          <h1 className="recruit__title">RECRUIT</h1>
          <table className="recruit__list">
            <caption className="blind">SCHEDULE</caption>
            <colgroup>
              <col style={{width:'100px'}} />
              <col style={{width:'120px'}} />
              <col style={{width:'auto'}} />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <strong className="date">13</strong>
                  <span className="year">2022.01</span>
                </td>
                <td>
                  <i className="tag tag__red">채용중</i>
                </td>
                <td><a href="#none">2022년 1월 인재채용 공고 안내</a></td>
              </tr>
              <tr>
                <td>
                  <strong className="date">17</strong>
                  <span className="year">2021.09</span>
                </td>
                <td>
                  <i className="tag tag__gray">채용마감</i>
                </td>
                <td><a href="#none">2021년 하반기 인재채용 공고 안내</a></td>
              </tr>
              <tr>
                <td>
                  <strong className="date">10</strong>
                  <span className="year">2021.07</span>
                </td>
                <td>
                  <i className="tag tag__gray">채용마감</i>
                </td>
                <td><a href="#none">2022년 7월 인재채용 공고 안내</a></td>
              </tr>
              <tr>
                <td>
                  <strong className="date">17</strong>
                  <span className="year">2021.03</span>
                </td>
                <td>
                  <i className="tag tag__gray">채용마감</i>
                </td>
                <td><a href="#none">2021년 상반기 인재채용 공고 안내</a></td>
              </tr>
            </tbody>
          </table>
          <div className="recruit__service">
            <a href="#none" className="recruit__service-HR">
              <dl>
                <dt>인사제도</dt>
                <dd>인재상, 인재육성, 평가 및 보상,<br />복리후생 등 안내입니다.</dd>
              </dl>
              <span className="txt-more"><em>MORE +</em></span>
            </a>
            <a href="#none" className="recruit__service-CA">
              <dl>
                <dt>채용정보</dt>
                <dd>채용절차 및 채용관련<br />안내입니다.</dd>
              </dl>
              <span className="txt-more"><em>MORE +</em></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main;
