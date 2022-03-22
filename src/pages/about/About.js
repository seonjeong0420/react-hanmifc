import { Routes,Route } from 'react-router-dom';
import './About.scss';
import Banner from '../../components/banner/Banner';
import Ceo from './Ceo';

const About = () => {
  return (
    <>
      <Banner title="세계적 품질 수준의 원료의약품을" desc="생산∙공급하는 글로벌 제약기업" img="bg_bnr_about.jpeg" />
      <div className="subsection">
        <Routes>
          <Route path="ceo" element={<Ceo />} />
        </Routes>
      </div>
    </>
  )
}

export default About;
