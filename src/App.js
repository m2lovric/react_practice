import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <section className='content'>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/create' element={<Create />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
