import InputButton from "../../components/InputButton";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClawContext } from "../../context/ClawContext";
import { RankingRouter } from "../../shared/RoutesString";
import './styles.css'

export default function InGame() {
    const { setClawButtonPressed } = useContext(ClawContext);

    const buttonsRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ]

    const navigate = useNavigate();
    
    const resetButtonsState = (currentBtn) => {
        buttonsRefs.map(buttonRef => 
            buttonRef !== currentBtn ? buttonRef.current.resetButton() : buttonRef)
    }

    const moveClaw = (direction) => {
        console.log(`remote server call to move the claw on ${direction} direction...`);
    }
    
    const grabPrize = () => {
        console.log('remote server call to attempt to grab a prize...');
        setClawButtonPressed(true);

        const timer = setTimeout(() => {
            navigate(RankingRouter)
        }, 3000);

        return () => clearTimeout(timer);
    }

    return (
        <>
            <div className="claw">
                <InputButton buttonType={"claw"} btnSize={200} ref={buttonsRefs[0]} 
                    resetButtons={resetButtonsState} pressFunction={grabPrize}/>
            </div>
    
            <div className="d-pad">
                <InputButton buttonType={"up"} btnSize={100} ref={buttonsRefs[1]} 
                    resetButtons={resetButtonsState} pressFunction={moveClaw}/>
    
                <div>
                    <InputButton buttonType={"left"} btnSize={115} ref={buttonsRefs[3]} 
                        resetButtons={resetButtonsState} pressFunction={moveClaw}/>
                    <InputButton buttonType={"right"} btnSize={115} ref={buttonsRefs[4]} 
                        resetButtons={resetButtonsState} pressFunction={moveClaw}/>
                </div>
    
                <InputButton buttonType={"down"} btnSize={100} ref={buttonsRefs[2]} 
                    resetButtons={resetButtonsState} pressFunction={moveClaw}/>
            </div>
        </>
    )
}