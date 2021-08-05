import {MineSweeper} from './MineSweeper/BuscaMinas';
import {MineRandomizer} from './MineSweeper/MineRandomizer';

const minePositionGenerator = new MineRandomizer()
const minesweeper = new MineSweeper(minePositionGenerator, 10, 5);
console.log(minesweeper);

