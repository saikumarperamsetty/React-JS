import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from '../src/components/Header/Header';
import Routing from './components/Routing/Routing';


function App() {
  return (
    <div>
      <Header />
      <Routing />
    </div>
  );
}

export default App;
