import {Routes, Route} from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import Personal from './Personal';

const Recruit = () => {
  return (
    <>
      <Banner title="제약산업의 미래 성장을 함께 이끌어 갈" desc="한미정밀화학의 인재를 기다립니다." img="bg_bnr_recruit.jpg" />
      <div className="subsection">
        <Routes>
          <Route path="personal" element={<Personal />} />
        </Routes>
      </div>
    </>
  )
}

export default Recruit;
