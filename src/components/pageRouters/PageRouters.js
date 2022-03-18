import { useEffect } from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';
import Main from '../../pages/main/Main';
import About from '../../pages/about/About';
import Product from '../../pages/product/Product';
const PageRouters = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about/*" element={<About />} />
      <Route path="product/*" element={<Product />} />
    </Routes>
  )
}

export default PageRouters;