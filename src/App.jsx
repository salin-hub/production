import './assets/style/product.css';
import Production from '../src/components/Production';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoniGiaComponent from './components/Submit_sucess';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Production/>}/>
          <Route path="/success" element={<NoniGiaComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;