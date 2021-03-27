import { useEffect, useState } from "react"
import { Button, Progress } from  "semantic-ui-react"
import useSound from "use-sound"

import { TileInfo } from "./App"
import { createPenaltyString } from "./Helpers"
import { Occurrence } from "./Occurrence"

interface ITileProps {
    tileInfo: TileInfo
    occurrences: Occurrence[]
    addOccurrence: () => void
    removeOccurrence: () => void
}

export const Tile = (props: ITileProps) => {
    const [timer, setTimer] = useState(0)
    const [playSound] = useSound(`${process.env.PUBLIC_URL}/sounds/${props.tileInfo.soundPath}`)

    useEffect(() => {
        if (timer <= 0) {
            return () => {}
        }

        let interval = setInterval(() => setTimer(timer - 20), 20)
        return () => clearInterval(interval)
    }, [timer])

    let score = props.occurrences.length

    let className = "tile"
    if (score > 0) {
        className += " checked"
    }

    let disabled = timer > 0
    if (disabled) {
        className += " disabled"
    }

    let quietPeriodMilliseconds = 1000 * props.tileInfo.quietPeriodSeconds

    const addOccurrence = () => {
        props.addOccurrence()
        playSound()

        // enforce quiet period
        setTimer(quietPeriodMilliseconds)
    }

    let progressPercent = 100 * timer / quietPeriodMilliseconds

    let penaltyStr = createPenaltyString(props.tileInfo.penalty)

    return (
        <div className={className}>
            <div className="tile-contents">
                <div className="text">
                    <span>
                        {props.tileInfo.text}
                    </span>
                </div>

                <div className="counter-container">
                    <div className="amount">
                        <span>
                            {penaltyStr}
                        </span>
                    </div>

                    <div className="score">
                        <span>
                            {score}
                        </span>
                    </div>
                </div>

                <div className="button-container">
                    <Button
                        onClick={addOccurrence}
                        disabled={disabled}>
                        <span>
                            +
                        </span>
                    </Button>

                    <Button
                        onClick={props.removeOccurrence}
                        disabled={score <= 0}>
                        <span>
                            -
                        </span>
                    </Button>
                </div>
            </div>

            <Progress
                percent={progressPercent}
                color="yellow"
                attached="bottom" />
        </div>
    )
}
