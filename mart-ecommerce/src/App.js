import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from '../src/components/Header/Header';
import Routing from './components/Routing/Routing';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
