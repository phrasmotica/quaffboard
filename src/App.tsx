import { GameBoard } from "./GameBoard"
import { shuffle } from "./Helpers"

import 'semantic-ui-css/semantic.min.css'
import "./App.css"

import gameInfo from "./gameInfo.json"

export type TileInfo = {
    text: string
    amount: string
    quietPeriodSeconds: number
    soundPath: string
}

export type GameInfo = {
    name: string
    tiles: TileInfo[]
}

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
