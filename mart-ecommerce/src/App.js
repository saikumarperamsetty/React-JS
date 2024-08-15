import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from '../src/components/Header/Header';
import Routing from './components/Routing/Routing';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
