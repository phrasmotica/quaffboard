interface ITileProps {
    text: string
    amount: string
    score: number
    bumpScore: () => void
    dropScore: () => void
}

export const Tile = (props: ITileProps) => {
    let className = "tile"
    if (props.score > 0) {
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
                        {props.score}
                    </span>
                </div>
            </div>

            <div className="button-container">
                <button onClick={props.bumpScore}>
                    <span>
                        +
                    </span>
                </button>

                <button
                    onClick={props.dropScore}
                    disabled={props.score <= 0}>
                    <span>
                        -
                    </span>
                </button>
            </div>
        </div>
    )
}
