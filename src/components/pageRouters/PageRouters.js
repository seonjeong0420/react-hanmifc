import { useEffect } from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';
import Main from '../../pages/main/Main';
import About from '../../pages/about/About';
import Product from '../../pages/product/Product';
import Develop from '../../pages/develop/Develop';
import Quality from '../../pages/quality/Quality';


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
      <Route path="develop/*" element={<Develop />} />
      <Route path="quality/*" element={<Quality />} />
    </Routes>
  )
}

export default PageRouters;