import { GameBoard } from "./GameBoard"
import { shuffle } from "./Helpers"

import 'semantic-ui-css/semantic.min.css'
import "./App.css"

import rawGameInfo from "./gameInfo.json"

export type Measure = "sip" | "soda" | "drink"

export type Penalty = {
    amount: number
    measure: Measure
}

export type TileInfo = {
    text: string
    penalty: Penalty
    quietPeriodSeconds: number
    soundPath: string
}

export type GameInfo = {
    name: string
    tiles: TileInfo[]
}

const gameInfo = rawGameInfo as GameInfo

const App = () => {
    shuffle(gameInfo)

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <GameBoard
                        gameInfo={gameInfo} />
                </div>
            </header>
        </div>
    )
}

export default App
