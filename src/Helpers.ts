import { GameInfo } from "./App";

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
