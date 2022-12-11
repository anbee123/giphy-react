import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';
import Giphy from './components/Giphy';

function App() {
  const [giphyData, setGiphyData] = useState({})

  const makeApiCall = async() => {
    const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=KsjTYugNKvEvGBZGQeZms3gf7f92AfFD&tag=&rating=g';

    const res = await fetch(giphyUrl);
    const json = await res.json();

    setGiphyData(json)
  }
  console.log(giphyData)

  return (
    <div className="App">
      <h1>GIPHY APP</h1>
      <Button getGiphy={makeApiCall}/>
      <Giphy giphy={giphyData}/> { }
      <Button getGiphy={makeApiCall}/>

    </div>
  );
}

export default App;
