interface ITileProps {
    text: string
    amount: string
    score: number
    bumpScore: () => void
}

export const Tile = (props: ITileProps) => {
    let className = "tile"
    if (props.score > 0) {
        className += " checked"
    }

    return (
        <div className={className}>
            <button onClick={props.bumpScore}>
                <div className="text">
                    <span>
                        {props.text}
                    </span>
                </div>
            </button>

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
        </div>
    )
}
