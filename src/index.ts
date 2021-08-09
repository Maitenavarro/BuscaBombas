import {MineSweeper} from './MineSweeper/BuscaMinas';
import {MineRandomizer} from './MineSweeper/MineRandomizer';

const minePositionGenerator = new MineRandomizer()
const minesweeper = new MineSweeper(minePositionGenerator, 5, 5);

const board = document.getElementById("tablero")


board.innerHTML = ""
document.oncontextmenu = function () {
    return false
}

const htmlBoard = [];
minesweeper.getBoard().forEach((row, y) => {
        const column = [];
        row.forEach((value, x) => {
                const slot = document.createElement("div")
                slot.classList.add("casilla")
                board.append(slot)
                column.push(slot);
                slot.addEventListener("click", () => {
                    minesweeper.openSlot(y, x);
                    updateBoard()
                })
                slot.addEventListener("contextmenu", () => {
                    minesweeper.toggleFlag(y, x);
                    updateBoard();
                })
            }
        )
        htmlBoard.push(column);
    }
)

function updateBoard() {
    minesweeper.getBoard().forEach((row, y) => {
        row.forEach((value, x) => {
            assignClass(value, htmlBoard[y][x])
        })
    })
}

function assignClass(value: string, slot: HTMLElement) {
    let classToAssign = 'casilla';
    switch (value) {
        case 'f': {
            classToAssign += " bandera";
            break;
        }
        case '': {

            break;
        }
        case '#': {
            classToAssign += ' open bandera';
            break;
        }
        case "*": {
            classToAssign += ' open bomba'
            break
        }
        case "0": {
            classToAssign += ' open empty';
            break;
        }
        case "1": {
            classToAssign += ' open one';
            break
        }
        case "2": {
            classToAssign += ' open two';
            break
        }
        case "3": {
            classToAssign += ' open three';
            break
        }
        case "4": {
            classToAssign += ' open four';
            break
        }
        case "5": {
            classToAssign += ' open five';
            break
        }
        case "6": {
            classToAssign += ' open six';
            break
        }
        case "7": {
            classToAssign += ' open seven';
            break
        }
        case "8": {
            classToAssign += ' open eight';
            break
        }
    }

    slot.className = classToAssign;
}
