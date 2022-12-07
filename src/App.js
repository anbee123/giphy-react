import {useState, useEffect} from 'react';
import './App.css';
import Button from './components/Button';
import Giphy from './components/Giphy';

function App() {
  const [gifData, setGifData] = useState ({});

  return (
    <div className="App">
     <Button />
     <Giphy />
    </div>
  );
}

export default App;
