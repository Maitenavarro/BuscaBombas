import {MinePosition, MinePositionCollection} from "../src/MineSweeper/MinePositions";

describe('MinePositionCollection', () => {

    it.each`

                Position                      | Expected
          ${new MinePosition(1, 0)} | ${1} 
          ${new MinePosition(0, 1)} | ${1}  
          ${new MinePosition(0, 2)} | ${1}      
          ${new MinePosition(2, 0)} | ${1}
          ${new MinePosition(1, 2)} | ${1}
          ${new MinePosition(2, 1)} | ${1}
          ${new MinePosition(0, 0)} | ${1}
          ${new MinePosition(2, 2)} | ${1}

    `('should return 1 if has 1 mine nearby', ({Position, Expected}) => {
        const minesPositions = new MinePositionCollection()
        minesPositions.addPosition(Position)
        expect(minesPositions.nearbyMines(1, 1)).toStrictEqual(Expected)
    })

    it.each`

                Positions                                               | Expected
        ${[[1, 0], [2, 0]]}                                             | ${2}
        ${[[1, 0], [2, 0], [0, 1]]}                                     | ${3}
        ${[[1, 0], [2, 0], [0, 1], [0, 2]]}                             | ${4}
        ${[[1, 0], [2, 0], [0, 1], [0, 2], [1, 2]]}                     | ${5}
        ${[[1, 0], [2, 0], [0, 1], [0, 2], [1, 2],[2,1]]}               | ${6}
        ${[[1, 0], [2, 0], [0, 1], [0, 2], [1, 2],[2,1],[2,2]]}         | ${7}
        ${[[1, 0], [2, 0], [0, 1], [0, 2], [1, 2],[2,1],[2,2],[0,0]]}   | ${8}

    `('should return the number of mines around', ({Positions, Expected}) => {
        const minesPositions = new MinePositionCollection();
        Positions.forEach((pos: [number, number]) => {
            minesPositions.addPosition(new MinePosition(pos[1], pos[0]));
        })
        expect(minesPositions.nearbyMines(1, 1)).toStrictEqual(Expected)
    })
})
