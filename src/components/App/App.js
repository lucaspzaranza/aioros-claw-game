import './App.css';
import Router from '../../Router';
import { useSound } from 'use-sound';
import musicBG from '../../assets/audio/music.mp3';

function App() {
  const [playMusic] = useSound(musicBG, { loop : true});

  playMusic();
  return (
    <div className="App">      
      <Router/>
    </div>
  );
}

export default App;
