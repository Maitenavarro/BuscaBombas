import {Slot} from "../src/MineSweeper/Slot";


describe('Slot', function () {
    describe('mark and unmark flag', function () {
        it('should mark a slot with the tagstate flag', function () {
            const slot = new Slot(false, 0)
            slot.markWithFlag();
            expect(slot.getContent()).toStrictEqual("f");
        });
        it('should unmark a slot with the tagstate none', function () {
            const slot = new Slot(false, 0)
            slot.unmarkFlag()
            expect(slot.getContent()).toStrictEqual("")
        });

    })
})
