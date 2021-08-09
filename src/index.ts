import {MineSweeper} from './MineSweeper/BuscaMinas';
import {MineRandomizer} from './MineSweeper/MineRandomizer';

const minePositionGenerator = new MineRandomizer()
const minesweeper = new MineSweeper(minePositionGenerator, 10, 5);
console.log(minesweeper.getBoard())
const board = document.getElementById("tablero")

board.innerHTML = ""
document.oncontextmenu = function () {
    return false
}
const grid = minesweeper.getBoard()

grid.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
                const slot = document.createElement("div")
                slot.classList.add("casilla")
                board.append(slot)

                slot.addEventListener("click", () => {
                    minesweeper.openSlot(rowIndex, columnIndex)
                    if (grid[rowIndex][columnIndex] === "*") {
                        slot.classList.add("open")
                        slot.classList.add("bomba")
                    }
                    if (grid[rowIndex][columnIndex] === "") {
                        slot.classList.add("open")
                        slot.classList.add("empty")
                    }
                })

                slot.addEventListener("auxclick", () => {
                    minesweeper.toggleFlag(rowIndex, columnIndex)
                    slot.classList.add("bandera")
                })
            }
        )
    }
)

