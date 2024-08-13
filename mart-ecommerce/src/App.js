import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from '../src/components/Header/Header';
import Routing from './components/Routing/Routing';


function App() {
  return (
    <div>
      {/* <center>
        <h2 style={{color:'orange'}}>Mart-Ecommerce React Project 7-8-2024</h2>
      </center> */}
      <Header />
      <Routing />
    </div>
  );
}

export default App;
