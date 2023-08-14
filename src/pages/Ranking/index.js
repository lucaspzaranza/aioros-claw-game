import { useNavigate } from "react-router-dom";
import { useSound } from 'use-sound';
import './styles.css';

import buttonSFX from '../../assets/audio/button.wav';
import { EndGameRouter } from "../../shared/RoutesString";
import { useRef } from "react";

export default function Ranking() {
    const maxLength = 3;
    const nameInput = useRef();
    const navigate = useNavigate();
    const [playButtonSFX] = useSound(buttonSFX);
    
    // using this solution to avoid android maxLength bug
    const maxlengthFunc = () => {
        const inputString = nameInput.current.value;
        if(inputString.length > maxLength) {
            nameInput.current.value = inputString.slice(0, maxLength);
        }
    }

    return (
        <div className="ranking">
            <h1>Digite seu nome:</h1>
            <form>
                <input className="form-control" type="text" ref={nameInput}
                    onInput={maxlengthFunc}/>

                <button className="form-control" type="submit" onClick={() => {
                    playButtonSFX();
                    navigate(EndGameRouter);}}>
                    Avançar
                </button>
            </form>
        </div>
    )
}