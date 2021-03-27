import { GameInfo, Penalty } from "./App";

/**
 * Returns a shuffled copy of the given array.
 * Adapted from https://stackoverflow.com/a/12646864.
 */
const shuffleArr = <T>(arr: T[]) => {
    let shuffledArr = [...arr]

    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }

    return shuffledArr
}

/**
 * Shuffles the given game info.
 */
export const shuffle = (gameInfo: GameInfo) => {
    gameInfo.tiles = shuffleArr(gameInfo.tiles)
}

/**
 * Returns a string describing the given penalty.
 */
export const createPenaltyString = (penalty: Penalty) => {
    if (penalty.measure === "drink") {
        return "down your drink"
    }

    return `${penalty.measure} x${penalty.amount}`
}
