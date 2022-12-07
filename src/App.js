import {useState, useEffect} from 'react';
import './App.css';
import Button from './components/Button';
import Giphy from './components/Giphy';

function App() {
  const [gifData, setGifData] =useState({});

  const makeApiCall = async (GiphyFun) => {
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=KsjTYugNKvEvGBZGQeZms3gf7f92AfFD&tag=&rating=g`
      
    const res = await fetch(randomUrl);
    const json = await res.json();

    setGifData(json)
  }
  useEffect(()=>{
    makeApiCall('random')
  }, [])
console.log(gifData)
  return (
    <div className="App">
     <Button  />
     <Giphy gif={gifData}/>
    </div>
  );
}

export default App;
