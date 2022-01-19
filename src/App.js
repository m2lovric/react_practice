import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <section className='content'>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
