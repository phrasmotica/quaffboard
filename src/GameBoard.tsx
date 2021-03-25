import moment, { duration } from "moment"
import React, { useState } from "react"
import { Button } from "semantic-ui-react"

import { GameInfo } from "./App"
import { Occurrence } from "./Occurrence"
import { Tile } from "./Tile"

interface IGameBoardProps {
    gameInfo: GameInfo
}

export const GameBoard = (props: IGameBoardProps) => {
    const [occurrences, setOccurrences] = useState<Occurrence[][]>(
        props.gameInfo.tiles.map(_ => [])
    )

    const addOccurrence = (index: number) => {
        let newOccurrences = occurrences.map((s, i) => {
            if (i === index) {
                let newOccurrence = {
                    time: moment()
                } as Occurrence

                s.push(newOccurrence)
            }

            return s
        })

        setOccurrences(newOccurrences)
    }

    const removeOccurrence = (index: number) => {
        let newOccurrences = occurrences.map((s, i) => {
            if (i === index) {
                s.pop()
            }

            return s
        })

        setOccurrences(newOccurrences)
    }

    const resetScores = () => setOccurrences(props.gameInfo.tiles.map(_ => []))

    let tiles = props.gameInfo.tiles.map((t, i) => (
        <Tile
            text={t.text}
            amount={t.amount ?? "one sip"}
            quietPeriod={duration(t.quietPeriodSeconds, "seconds")}
            soundPath={t.sound}
            occurrences={occurrences[i]}
            addOccurrence={() => addOccurrence(i)}
            removeOccurrence={() => removeOccurrence(i)} />
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
                <Button onClick={resetScores}>
                    Reset
                </Button>
            </div>
        </div>
    )
}
