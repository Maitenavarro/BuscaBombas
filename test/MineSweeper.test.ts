import {MineSweeper} from "../src/MineSweeper/BuscaMinas";
import {PredeterminedMinesPositions} from "../src/MineSweeper/PredeterminedMinesPositions";
import {MinePosition} from "../src/MineSweeper/MinePositions";

const positions = [
    new MinePosition(7, 7),
    new MinePosition(4, 2),
    new MinePosition(5, 5),
    new MinePosition(5, 2),
    new MinePosition(4, 6),
    new MinePosition(1, 0),
    new MinePosition(2, 1),
    new MinePosition(7, 1),
]

describe('MineSweeper', () => {
    describe('OpenSlot', function () {
        it('should throw error if the position given is out of bounds', function () {
            const mineSweeper = new MineSweeper(new PredeterminedMinesPositions(positions), 8, 8)
            expect(() => mineSweeper.openSlot(10, 10)).toThrowError('Position out of bounds')
        })
        it('should return true if is a mine', function () {
            const minesPositions = new PredeterminedMinesPositions([
                new MinePosition(4, 6),
                new MinePosition(2, 1),
            ])
            minesPositions.getMinePositions(8, 8)
            const mineSweeper = new MineSweeper(minesPositions, 8, 8)
            expect(mineSweeper.openSlot(4, 6)).toStrictEqual(true)
        })
        it('should return false if is revealed', function () {
            const minesPositions = new PredeterminedMinesPositions(positions)
            const mineSweeper = new MineSweeper(minesPositions, 8, 8)
            mineSweeper.openSlot(2, 2)
            expect(mineSweeper.openSlot(2, 2)).toStrictEqual(false)
        })
        it('should reveal adjacent Slot if not mine', function () {
            const minesPositions = new PredeterminedMinesPositions(
                [
                    new MinePosition(0, 0),
                ]
            )
            const mineSweeper = new MineSweeper(minesPositions, 1, 3)
            mineSweeper.openSlot(2, 1);
            const theBoard = mineSweeper.getBoard();
            expect(theBoard).toStrictEqual(
                [
                    ["", "1", "0"],
                    ["1", "1", "0"],
                    ["0", "0", "0"],
                ]
            );
        })
        it('should reveal all the slots that have FLAG but not mines if you happen to open a slot with a mine in it', () => {
            const minesPositions = new PredeterminedMinesPositions(
                [
                    new MinePosition(1, 1),
                    new MinePosition(0, 0),
                ]
            )
            const mineSweeper = new MineSweeper(minesPositions, 2, 2)
            mineSweeper.toggleFlag(0, 1)
            mineSweeper.openSlot(1, 1)
            expect(mineSweeper.getBoard()).toStrictEqual([
                ["*", "#"],
                ["", "*"]
            ])
        })
    });

    describe('toggleFlag', function () {
        it('should mark a slot with a flag', function () {
            const minesPositions = new PredeterminedMinesPositions(positions)
            const mineSweeper = new MineSweeper(minesPositions, 2, 2)
            mineSweeper.toggleFlag(0, 0);
            expect(mineSweeper.getBoard()).toStrictEqual(
                [
                    ["f", ""],
                    ["", ""],
                ]
            )
        });
        it('should unmark a slot with a flag if already has one', function () {
            const minesPositions = new PredeterminedMinesPositions(positions)
            const mineSweeper = new MineSweeper(minesPositions, 2, 2);
            mineSweeper.toggleFlag(0, 0);
            mineSweeper.toggleFlag(0, 0);
            expect(mineSweeper.getBoard()).toStrictEqual([["",""],["",""]]);
        });
    })

    describe('RevealMinesPositions', function () {
        it('should reveal the mines', function () {
            const minesPositions = new PredeterminedMinesPositions(
                [
                    new MinePosition(1, 1),
                    new MinePosition(0, 0),
                ]
            )
            const mineSweeper = new MineSweeper(minesPositions, 2, 2)
            mineSweeper.openSlot(1, 1)
            expect(mineSweeper.getBoard()).toStrictEqual(
                [
                    ["*", ""],
                    ["", "*"]
                ]
            )
        })
    });
})
