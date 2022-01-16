import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <section className='content'>
        <Home />
      </section>
    </div>
  );
}

export default App;
