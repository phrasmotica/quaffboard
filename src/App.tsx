import React from "react"

import { GameBoard } from "./GameBoard"

import "./App.css"

import gameInfo from "./gameInfo.json"

export type GameInfo = {
    name: string
    tiles: {
        text: string
        amount: string
    }[]
}

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <GameBoard
                        gameInfo={gameInfo as GameInfo} />
                </div>
            </header>
        </div>
    )
}

export default App
