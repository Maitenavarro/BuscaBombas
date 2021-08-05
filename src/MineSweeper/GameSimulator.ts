import {MineSweeper} from "./BuscaMinas";
import {MinePosition} from "./MinePositions";
import {PredeterminedMinesPositions} from "./PredeterminedMinesPositions";
const Positions = new PredeterminedMinesPositions([new MinePosition(1, 1), new MinePosition(2, 2)])
let mineSweeper = new MineSweeper(Positions, 2, 3)

function getElements() {
    const arrays: string[][] = []
    mineSweeper.getBoard().map((array) => {
        const elements: string[] = []
        array.map((string) => {
            elements.push(string)
        })
        arrays.push(elements)
    })
    return arrays
}

function getCurrentBoard() {
    console.log('╔═══╦═══╦═══╗');
    console.log('║' + getElements()[0][0] + '║' + getElements()[0][1] + '║' + getElements()[0][2] + '║')
    console.log('╠═══╬═══╬═══╣');
    console.log('║' + getElements()[1][0] + '║' + getElements()[1][1] + '║' + getElements()[1][2] + '║')
    console.log('╠═══╬═══╬═══╣');
    console.log('║' + getElements()[2][0] + '║' + getElements()[2][1] + '║' + getElements()[2][2] + '║')
    console.log('╚═══╩═══╩═══╝');
}

function lostGame() {
    console.log('Starts the game')
    getCurrentBoard();
    console.log('Open the slot 1, 1')
    mineSweeper.openSlot(1, 1)
    getCurrentBoard();
    console.log('GAME OVER CERDO')
}

function wonGame() {
    mineSweeper = new MineSweeper(Positions, 2, 3)
    console.log('Starts the game')
    getCurrentBoard();
    console.log('Open the first slot 0, 0')
    mineSweeper.openSlot(0,0)
    getCurrentBoard();
    console.log('Open the slot 1, 0')
    mineSweeper.openSlot(1,0)
    getCurrentBoard();
    console.log('Open the slot 2, 1')
    mineSweeper.openSlot(2,1)
    getCurrentBoard();
    console.log('Open the slot 2, 0')
    mineSweeper.openSlot(2,0)
    getCurrentBoard();
    console.log('Open the slot 1, 2')
    mineSweeper.openSlot(1,2)
    getCurrentBoard();
    console.log('Place a flag in the slot 1, 1')
    mineSweeper.toggleFlag(1,1)
    getCurrentBoard();
    console.log('Place a flag in the slot 2, 2')
    mineSweeper.toggleFlag(2,2)
    getCurrentBoard();
    console.log('Open the slot 0, 1')
    mineSweeper.openSlot(0,1)
    getCurrentBoard();
    console.log('Open the slot 0, 2')
    mineSweeper.openSlot(0,2)
    getCurrentBoard();
    console.log('YOU WON GUARRO')

}

lostGame()
wonGame()
