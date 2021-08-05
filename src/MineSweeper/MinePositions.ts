export class MinePositionCollection {
    positions: Map<string, MinePosition> = new Map();

    addPosition(minePosition: MinePosition) {
        const key = this.computeKey(minePosition.row,minePosition.column);
        this.positions.set(key, minePosition);
    }

    private computeKey(row: number, column: number): string {
        return `${row},${column}`;
    }

    hasMine(column: number, row: number): boolean {
        return Boolean(this.positions.get(this.computeKey(row, column)));
    }

    nearbyMines(column: number, row: number) {
        let foundMines = 0;
        const combinations = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ]
        combinations.forEach(com => {
            let rowIndex = row + com[0];
            let columnIndex = column + com[1];
            if (this.hasMine(columnIndex, rowIndex)) {
                foundMines++;
            }
        })
        return foundMines;
    }
}

export class MinePosition {
    constructor(row: number, column: number) {
        this.column = column
        this.row = row
    }

    column: number;
    row: number;
}