import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";

import Loading from "./pages/Loading";
import InGame from "./pages/InGame";
import Ranking from "./pages/Ranking";
import EndGame from "./pages/EndGame";
import { ClawProvider } from "./context/ClawContext.js";
import { HomeRouter, InGameRouter, RankingRouter, EndGameRouter } from "./shared/RoutesString";
import images from './assets/'

export default function Router() {
    return (
        <ClawProvider>
            <img className="upper-bar" src={images.upperBar} alt="upperBar"/>
            <Routes>
                <Route path={HomeRouter} exact element={<Loading/>} />
                <Route path={InGameRouter} exact element={<InGame/>}/>
                <Route path={RankingRouter} exact element={<Ranking/>}/>
                <Route path={EndGameRouter} exact element={<EndGame/>}/>
                <Route path="*" element={<Navigate to={HomeRouter} replace/>}/>
            </Routes>
        </ClawProvider>
    )
}