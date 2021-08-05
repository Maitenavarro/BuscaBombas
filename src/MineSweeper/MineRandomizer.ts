import {MinePosition, MinePositionCollection} from "./MinePositions";
import {MinePositionGenerator} from "./BuscaMinas";

export class MineRandomizer implements MinePositionGenerator {
    static getRandomMinePositions(mines: number, size: number): MinePositionCollection {
        const positions = new MinePositionCollection();
        for (let i = 0; i < mines; i++) {
            let minePosition = MineRandomizer.getRandomMinePosition(size)
            while (positions.hasMine(minePosition.column, minePosition.row)) {
                minePosition = MineRandomizer.getRandomMinePosition(size)
            }
            positions.addPosition(minePosition);
        }
        return positions;
    }

    getMinePositions(minesCount: number, gridSize: number): MinePositionCollection {
        return MineRandomizer.getRandomMinePositions(minesCount, gridSize);
    }

    static getRandomMinePosition(size: number) {
        const column = Math.floor(Math.random() * size);
        const row = Math.floor(Math.random() * size);
        return new MinePosition(row, column);
    }
}

