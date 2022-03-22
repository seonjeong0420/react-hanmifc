import './assets/scss/reset.scss';
import './assets/scss/components/_common.scss';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import PageRouters from './components/pageRouters/PageRouters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <PageRouters />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
