import { Duration } from "moment"
import { useEffect, useState } from "react"
import { Progress } from  "semantic-ui-react"
import useSound from "use-sound"

import { Occurrence } from "./Occurrence"

interface ITileProps {
    text: string
    amount: string
    quietPeriod: Duration
    soundPath: string
    occurrences: Occurrence[]
    addOccurrence: () => void
    removeOccurrence: () => void
}

export const Tile = (props: ITileProps) => {
    const [timer, setTimer] = useState(0)
    const [playSound] = useSound(`${process.env.PUBLIC_URL}/sounds/${props.soundPath}`)

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

    let quietPeriodMillis = props.quietPeriod.asMilliseconds()

    const addOccurrence = () => {
        props.addOccurrence()
        playSound()

        // enforce quiet period
        setTimer(quietPeriodMillis)
    }

    let progressPercent = 100 * timer / quietPeriodMillis

    return (
        <div className={className}>
            <div className="tile-contents">
                <div className="text">
                    <span>
                        {props.text}
                    </span>
                </div>

                <div className="counter-container">
                    <div className="amount">
                        <span>
                            {props.amount}
                        </span>
                    </div>

                    <div className="score">
                        <span>
                            {score}
                        </span>
                    </div>
                </div>

                <div className="button-container">
                    <button
                        onClick={addOccurrence}
                        disabled={disabled}>
                        <span>
                            +
                        </span>
                    </button>

                    <button
                        onClick={props.removeOccurrence}
                        disabled={score <= 0}>
                        <span>
                            -
                        </span>
                    </button>
                </div>
            </div>

            <Progress
                percent={progressPercent}
                color="yellow"
                attached="bottom" />
        </div>
    )
}
