import { useNavigate } from "react-router-dom";
import { useSound } from 'use-sound';
import './styles.css';

import buttonSFX from '../../assets/audio/button.wav';

export default function Ranking() {
    const navigate = useNavigate();
    const [playButtonSFX] = useSound(buttonSFX);

    return (
        <div className="ranking">
            <h1>Digite seu nome:</h1>
            <form>
                <input className="form-control" type="text" maxLength="3"/>
                <button className="form-control" type="submit" onClick={() => {
                    playButtonSFX();
                    navigate('/endgame');}}>
                    Avançar
                </button>
            </form>
        </div>
    )
}