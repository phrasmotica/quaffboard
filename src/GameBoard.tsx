import moment from "moment"
import { useState } from "react"
import { Button } from "semantic-ui-react"

import { GameInfo } from "./App"
import { Occurrence } from "./Occurrence"
import { Tile } from "./Tile"

interface IGameBoardProps {
    gameInfo: GameInfo
}

export const GameBoard = (props: IGameBoardProps) => {
    let tiles = props.gameInfo.tiles

    const [occurrences, setOccurrences] = useState<Occurrence[][]>(tiles.map(_ => []))

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

    const resetScores = () => setOccurrences(tiles.map(_ => []))

    let tileElements = tiles.map((t, i) => (
        <Tile
            tileInfo={t}
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
                {tileElements}
            </div>

            <div>
                <Button onClick={resetScores}>
                    Reset
                </Button>
            </div>
        </div>
    )
}
