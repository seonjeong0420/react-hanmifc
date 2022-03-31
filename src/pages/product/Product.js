import { Routes,Route } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import Research from './Research';

const Product = () => {
  return (
    <>
      <Banner title="최고 품질의 CMO서비스를" desc="제공하는 글로벌 원료의약품 기업" img="bg_bnr_product.jpg" />
      <div className="subsection">
        <Routes>
          <Route path="research" element={<Research />} />
        </Routes>
      </div>
    </>
  )
}

export default Product;
