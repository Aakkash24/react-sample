import './App.css';
import Header from "./components/Header.js"
import Row2 from './components/Row2';
import Row4 from './components/Row4';
import Row5 from './components/Row5';

function App() {
  return (
    <div className="App">
      <Header />
      <Row2 />
      <div className="row3">
          <h1>Projects</h1>
      </div>
      <Row4/>
      <Row5/>
    </div>
  );
}

export default App;