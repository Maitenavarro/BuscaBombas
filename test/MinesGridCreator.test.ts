import {MineGridCreator} from "../src/MineSweeper/MinesGridCreator";
import {Slot} from "../src/MineSweeper/Slot";
import {MinePositionCollection, MinePosition} from "../src/MineSweeper/MinePositions";

describe('MinesGridCreator', () => {
        it('should throw if size is 0 or less', () => {
            let mineCreator = new MineGridCreator(new MinePositionCollection(), 0);
            expect(() => mineCreator.getGrid()).toThrowError('I need the mines positions and the grid can not be 0 or less')
        })

        it('should return the grid with slots (is not important the slot content)', () => {
            let mineCreator = new MineGridCreator(new MinePositionCollection(), 2);
            expect(mineCreator.getGrid()).toStrictEqual([
                [new Slot(false, 0), new Slot(false, 0)],
                [new Slot(false, 0), new Slot(false, 0)]
            ])
        })

        it('should return the grid with slots and with the 1 mine in the correct position', () => {
            const minePosition = new MinePositionCollection();
            minePosition.addPosition(new MinePosition(0, 1))
            let mineCreator = new MineGridCreator(minePosition, 2);
            expect(mineCreator.getGrid()).toStrictEqual([
                [new Slot(false, 1), new Slot(true, 0)],
                [new Slot(false, 1), new Slot(false, 1)]
            ])
        })


        it('should return the grid with 8 slots in 8 arrays', () => {

            const minePosition = new MinePositionCollection();
            minePosition.addPosition(new MinePosition(0, 1))
            minePosition.addPosition(new MinePosition(2, 2))
            minePosition.addPosition(new MinePosition(0, 3))
            minePosition.addPosition(new MinePosition(7, 4))
            minePosition.addPosition(new MinePosition(7, 7))
            minePosition.addPosition(new MinePosition(3, 3))
            minePosition.addPosition(new MinePosition(6, 7))
            minePosition.addPosition(new MinePosition(5, 2))

            expect(new MineGridCreator(minePosition, 8).getGrid()).toStrictEqual([
                [new Slot(false, 1), new Slot(true, 0), new Slot(false, 2), new Slot(true, 0), new Slot(false, 1), new Slot(false, 0), new Slot(false, 0), new Slot(false, 0),],
                [new Slot(false, 1), new Slot(false, 2), new Slot(false, 3), new Slot(false, 2), new Slot(false, 1), new Slot(false, 0), new Slot(false, 0), new Slot(false, 0),],
                [new Slot(false, 0), new Slot(false, 1), new Slot(true, 1), new Slot(false, 2), new Slot(false, 1), new Slot(false, 0), new Slot(false, 0), new Slot(false, 0),],
                [new Slot(false, 0), new Slot(false, 1), new Slot(false, 2), new Slot(true, 1), new Slot(false, 1), new Slot(false, 0), new Slot(false, 0), new Slot(false, 0),],
                [new Slot(false, 0), new Slot(false, 1), new Slot(false, 2), new Slot(false, 2), new Slot(false, 1), new Slot(false, 0), new Slot(false, 0), new Slot(false, 0),],
                [new Slot(false, 0), new Slot(false, 1), new Slot(true, 0), new Slot(false, 1), new Slot(false, 0), new Slot(false, 0), new Slot(false, 1), new Slot(false, 1),],
                [new Slot(false, 0), new Slot(false, 1), new Slot(false, 1), new Slot(false, 2), new Slot(false, 1), new Slot(false, 1), new Slot(false, 2), new Slot(true, 1),],
                [new Slot(false, 0), new Slot(false, 0), new Slot(false, 0), new Slot(false, 1), new Slot(true, 0), new Slot(false, 1), new Slot(false, 2), new Slot(true, 1),],
            ])
        })
    }
)

