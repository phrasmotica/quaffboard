import React, { useState } from "react"
import { GameInfo } from "./App"

import { Tile } from "./Tile"

interface IGameBoardProps {
    gameInfo: GameInfo
}

export const GameBoard = (props: IGameBoardProps) => {
    const [scores, setScores] = useState(props.gameInfo.tiles.map(_ => 0))

    const bumpScore = (index: number) => {
        let newScores = scores.map((s, i) => i === index ? s + 1 : s)
        setScores(newScores)
    }

    const resetScores = () => setScores(props.gameInfo.tiles.map(_ => 0))

    let tiles = props.gameInfo.tiles.map((t, i) => (
        <Tile
            text={t.text}
            amount={t.amount ?? "one sip"}
            score={scores[i]}
            bumpScore={() => bumpScore(i)} />
    ))

    return (
        <div>
            <div className="board-header">
                <span>
                    {props.gameInfo.name}
                </span>
            </div>

            <div className="tile-grid">
                {tiles}
            </div>

            <div>
                <button onClick={resetScores}>
                    Reset
                </button>
            </div>
        </div>
    )
}
