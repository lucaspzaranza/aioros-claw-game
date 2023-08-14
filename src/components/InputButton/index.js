import { useState, useEffect, forwardRef, useImperativeHandle, useContext } from "react";
import { ClawContext } from '../../context/ClawContext.js';
import { useSound } from 'use-sound';
import './styles.css'

import images from '../../assets/';
import buttonSFX from '../../assets/audio/button.wav';

const InputButton = forwardRef(({buttonType, resetButtons, pressFunction, btnSize}, ref) => {

    const [isPressed, setIsPressed] = useState(false);
    const [img, setBtnImage] = useState(images.btnDown);
    const [pressedImg, setPressedBtnImage] = useState(images.btnDownPressed);
    const [playButtonSFX] = useSound(buttonSFX);

    const { clawBtnPressed } = useContext(ClawContext);
    const selectBtnImage = (buttonType) => {
        switch(buttonType) {
            case "up": {
                setBtnImage(images.btnUp);
                setPressedBtnImage(images.btnUpPressed);
                break;
            }

            case "left": {
                setBtnImage(images.btnLeft);
                setPressedBtnImage(images.btnLeftPressed);
                break;
            }

            case "right": {
                setBtnImage(images.btnRight);
                setPressedBtnImage(images.btnRightPressed);
                break;
            }

            case "claw": {
                setBtnImage(images.btnClaw);
                setPressedBtnImage(images.btnClawPressed);
                break;
            }

            default: {
                setBtnImage(images.btnDown);
                setPressedBtnImage(images.btnDownPressed);
            }
        }
    }

    useImperativeHandle(ref, () => ({
        resetButton(){
            setIsPressed(false);
        }
    }))

    useEffect(() => {
        selectBtnImage(buttonType);
    }, []);

    return (
        <button className="game-btn">
            <img src={isPressed ? pressedImg : img} alt="btn" style={{width: btnSize}}
            onClick={() => {
                playButtonSFX();

                if(clawBtnPressed) {
                    console.log("Can't move the claw because it's already pressed.");
                    return;
                }
                
                setIsPressed(!isPressed);
                
                if(buttonType === 'claw') {
                    // here it will be the grabPrize() function
                    pressFunction();
                }
                else { // directional buttons
                    pressFunction(buttonType);
                }
            
                resetButtons(ref);
            }}/>
        </button>
    )
})

export default InputButton;