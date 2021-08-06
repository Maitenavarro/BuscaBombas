import {MineSweeper} from './MineSweeper/BuscaMinas';
import {MineRandomizer} from './MineSweeper/MineRandomizer';
import {MineGridCreator} from "./MineSweeper/MinesGridCreator";
import {MinePositionCollection} from "./MineSweeper/MinePositions";

const minePositionGenerator = new MineRandomizer()
const minesweeper = new MineSweeper(minePositionGenerator, 10, 5);
const board = document.getElementById("tablero")
const minePosition = new MinePositionCollection()
const grid = new MineGridCreator(minePosition,5).getGrid()

board.innerHTML = ""
document.oncontextmenu = function () {
    return false
}
grid.forEach(row => {
        row.forEach(column => {
                const slot = document.createElement("div")
                slot.classList.add("casilla")
                board.append(slot)
                slot.addEventListener("click", () => {
                    slot.classList.add("open")
                    if (minePosition.hasMine(column[0][0], row[0][0])) {
                        slot.classList.add("bomba")
                    }
                    if(minePosition.nearbyMines(column[0][0], row[0][0]) === 0){
                        slot.classList.add("empty")
                    }
                })
                slot.addEventListener("auxclick", () => {
                    slot.classList.add("bandera")
                })
            }
        )
    }
)

