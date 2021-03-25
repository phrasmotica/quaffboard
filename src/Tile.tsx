import useSound from "use-sound"

import { Occurrence } from "./Occurrence"

interface ITileProps {
    text: string
    amount: string
    soundPath: string
    occurrences: Occurrence[]
    addOccurrence: () => void
    removeOccurrence: () => void
}

export const Tile = (props: ITileProps) => {
    const [playSound] = useSound(`${process.env.PUBLIC_URL}/sounds/${props.soundPath}`)

    let score = props.occurrences.length

    let className = "tile"
    if (score > 0) {
        className += " checked"
    }

    const addOccurrence = () => {
        props.addOccurrence()
        playSound()
    }

    return (
        <div className={className}>
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
                <button onClick={addOccurrence}>
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
    )
}
