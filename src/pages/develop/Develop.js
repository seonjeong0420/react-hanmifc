import { Routes,Route } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import Rnd from './Rnd';

const Develop = () => {
  return (
    <>
      <Banner title="혁신적 연구와 끊임없는 개발로" desc="나아가는 기업" img="bg_bnr_rnd.jpeg" />
      <div className="subsection">
        <Routes>
          <Route path="rnd" element={<Rnd />} />
        </Routes>
      </div>
    </>
  )
}

export default Develop;