interface ITileProps {
    text: string
    amount: string
    score: number
    bumpScore: () => void
}

export const Tile = (props: ITileProps) => {
    return (
        <div className="tile">
            <button onClick={props.bumpScore}>
                <div className="text">
                    <span>
                        {props.text}
                    </span>
                </div>

                <hr />

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
            </button>
        </div>
    )
}
