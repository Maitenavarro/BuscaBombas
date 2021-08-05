import {Slot} from "./Slot";
import {MinePositionCollection} from "./MinePositions";

export class MineGridCreator {
    private grid: Slot[][] = [];
    private _minesPositions: MinePositionCollection;
    private _gridSize: number;

    constructor(minesPositions: MinePositionCollection, gridSize: number) {
        this._minesPositions = minesPositions;
        this._gridSize = gridSize;
    }

    getGrid() {
        for (let row = 0; row < this._gridSize; row++) {
            const rowArray = []
            for (let column = 0; column < this._gridSize; column++) {
                const hasMine = this._minesPositions.hasMine(column, row);
                const minesNearby = this._minesPositions.nearbyMines(column, row)
                const slot = new Slot(hasMine, minesNearby)
                rowArray.push(slot)
            }
            this.grid.push(rowArray)
        }

        if (this._gridSize <= 0) {
            throw Error('I need the mines positions and the grid can not be 0 or less')
        }

        return this.grid
    }
}
