import React, { useState, createContext } from 'react';

export const ClawContext = createContext(false);

export function ClawProvider(props) {
    const [clawBtnPressed, setClawBtnPressed] = useState(false);

    function setClawButtonPressed(val) {
        setClawBtnPressed(val)
    }

    return (
        <ClawContext.Provider value={{clawBtnPressed, setClawButtonPressed}}>
            {props.children}
        </ClawContext.Provider>
    )
}