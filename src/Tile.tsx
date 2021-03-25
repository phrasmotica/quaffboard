import { Occurrence } from "./Occurrence"

interface ITileProps {
    text: string
    amount: string
    occurrences: Occurrence[]
    addOccurrence: () => void
    removeOccurrence: () => void
}

export const Tile = (props: ITileProps) => {
    let score = props.occurrences.length

    let className = "tile"
    if (score > 0) {
        className += " checked"
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
                <button onClick={props.addOccurrence}>
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
