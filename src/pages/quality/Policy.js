import {useState} from 'react';
import '../../assets/scss/components/layout/_tab.scss';
import './quality.scss';

const Policy = () => {
  const tabList = ['품질정책', '품질관리', 'GMP승인']
  const [tabActive, setTabActive] = useState(0);
  const tabClickHandler = (idx) => {
    setTabActive(idx);
  }
  const tabPage = {
    0: <Content1 />,
    1: <Content2 />,
    2: <Content3 />
  }
  return (
    <section className="policy">
      <nav className="com-tab">
        {tabList.map( (tab, idx) => {
          return (
            <a href="#none" className={`tab ${tabActive === idx ? 'active' : ''}`} onClick={() => tabClickHandler(idx)}>{tab}</a>
          )
        })}
      </nav>
      <>
        {tabPage[tabActive]}
      </>

    </section>
  )
}

export default Policy;

const Content1 = () => {
  return (
    <>
      <h2 className="subsection__title">품질정책</h2>
      <p className="subsection__desc">한미정밀화학은 글로벌 GMP 요구 규정을 준수하고 다음과 같은 품질정책을 운영하고 있습니다.</p>
    </>
  )
}

const Content2 = () => {
  return (
    <>
      <h2 className="subsection__title">품질관리</h2>


    </>
  )
}

const Content3 = () => {
  return (
    <>
      <h2 className="subsection__title">GMP승인</h2>
      <p className="subsection__desc">한미정밀화학은 미국 및 유럽을 비롯한 글로벌 규제기관으로부터 API 제조시설에 대한 GMP 승인을 받았습니다.</p>
    </>
  )
}