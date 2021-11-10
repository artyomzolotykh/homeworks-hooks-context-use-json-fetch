import './App.css';
import JsonFetch from './components/JsonFetch';

function App() {
  return (
    <div className="App">
      <p>GET http://localhost:7070/data - <JsonFetch url="http://localhost:7070/data" /></p>
      <p>GET http://localhost:7070/error - <JsonFetch url="http://localhost:7070/error" /></p>
      <p>GET http://localhost:7070/loading - <JsonFetch url="http://localhost:7070/loading" /></p>
    </div>
  );
}

export default App;
