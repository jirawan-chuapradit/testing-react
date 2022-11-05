import logo from './logo.svg';
import './App.css';

const Hi = ({name}) => {
  return (  <h1> hello {name}</h1>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Hi name="Jugjig" />
      <Hi name="Jirawan" />
      <Hi name="react" />
      
      <h1>  Learn React </h1>
        
        
      </header>
    </div>
  );
}

export default App;
