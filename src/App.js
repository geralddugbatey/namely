import logo from './logo.svg';
import './App.css';
import { Body } from './Body';
import { Globalstyle } from './Globalstyles';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {Data} from './Data'
function App() {
  return (
    <>
    <Globalstyle/>
    <Body className="App">
      <Header/>
      <Home data={Data}/>
    </Body>

    </>
  );
}

export default App;
