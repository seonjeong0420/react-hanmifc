import { Routes,Route } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import Policy from './Policy';

const Product = () => {
  return (
    <>
      <Banner title="안전과 건강을 위해" desc="최고의 품질을 고집하는 기업" img="bg_bnr_quality.jpg" />
      <div className="subsection">
        <Routes>
          <Route path="policy" element={<Policy />} />
        </Routes>
      </div>
    </>
  )
}

export default Product;
