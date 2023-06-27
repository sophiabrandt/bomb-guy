const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;
const TPS = 2;
const DELAY = FPS / TPS;

enum TileEnum {
  AIR,
  UNBREAKABLE,
  STONE,
  BOMB,
  BOMB_CLOSE,
  BOMB_REALLY_CLOSE,
  TMP_FIRE,
  FIRE,
  EXTRA_BOMB,
  MONSTER_UP,
  MONSTER_RIGHT,
  TMP_MONSTER_RIGHT,
  MONSTER_DOWN,
  TMP_MONSTER_DOWN,
  MONSTER_LEFT,
}

/* eslint-disable require-jsdoc */
/**
 * Represents a tile.
 */
interface Tile {
  isAir(): boolean;

  isUnbreakable(): boolean;

  isStone(): boolean;

  isBomb(): boolean;

  isBombClose(): boolean;

  isBombReallyClose(): boolean;

  isTmpFire(): boolean;

  isFire(): boolean;

  isExtraBomb(): boolean;

  isMonsterUp(): boolean;

  isMonsterRight(): boolean;

  isTmpMonsterRight(): boolean;

  isMonsterDown(): boolean;

  isMonsterLeft(): boolean;
}

/**
 * Represents an air tile.
 */
class AirTile implements Tile {
  isAir(): boolean {
    return true;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }
}

/**
 * Represents an unbreakable tile.
 */
class UnbreakableTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return true;
  }

  isStone(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }
}

/*
 * Represents a stone tile.
 */
class StoneTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isStone(): boolean {
    return true;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }
}

class BombTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isBomb(): boolean {
    return true;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }
}

/**
 * Represents an extra bomb tile.
 */
class ExtraBombTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return true;
  }

  isFire(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }
}

/**
 * Represents a fire tile.
 */
class FireTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isFire(): boolean {
    return true;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }
}

/**
 * Represents a temporary fire tile.
 */
class TmpFireTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return true;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }
}

/**
 * Represents a Monster DOWN tile.
 */
class MonsterDownTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return true;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }
}

/**
 * Represents a Monster LEFT tile.
 */
class MonsterLeftTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return true;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }
}

/**
 * Represents a Monster RIGHT tile.
 */
class MonsterRightTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return true;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }
}

/**
 * Represents a Monster UP tile.
 */
class MonsterUpTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return true;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }
}

/**
 * Represents a temporary monster RIGHT tile.
 */
class TmpMonsterRightTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return false;
  }

  isBombReallyClose(): boolean {
    return false;
  }

  isExtraBomb(): boolean {
    return false;
  }

  isFire(): boolean {
    return false;
  }

  isMonsterDown(): boolean {
    return false;
  }

  isMonsterLeft(): boolean {
    return false;
  }

  isMonsterRight(): boolean {
    return false;
  }

  isMonsterUp(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isTmpFire(): boolean {
    return false;
  }

  isTmpMonsterRight(): boolean {
    return true;
  }

  isUnbreakable(): boolean {
    return false;
  }
}

interface Input {
  isRight(): boolean;

  isLeft(): boolean;

  isUp(): boolean;

  isDown(): boolean;

  isPlaceBomb(): boolean;

  handle(): void;
}

/**
 * Represents a left input.
 */
class Left implements Input {
  isRight() {
    return false;
  }

  isLeft() {
    return true;
  }

  isUp() {
    return false;
  }

  isDown() {
    return false;
  }

  isPlaceBomb() {
    return false;
  }

  handle(): void {
    move(-1, 0);
  }
}

/**
 * Represents a right input.
 */
class Right implements Input {
  isRight() {
    return true;
  }

  isLeft() {
    return false;
  }

  isUp() {
    return false;
  }

  isDown() {
    return false;
  }

  isPlaceBomb() {
    return false;
  }

  handle(): void {
    move(1, 0);
  }
}

/**
 * Represents an up input.
 */
class Up implements Input {
  isRight() {
    return false;
  }

  isLeft() {
    return false;
  }

  isUp() {
    return true;
  }

  isDown() {
    return false;
  }

  isPlaceBomb() {
    return false;
  }

  handle(): void {
    move(0, -1);
  }
}

/**
 * Represents a down input.
 */
class Down implements Input {
  isRight() {
    return false;
  }

  isLeft() {
    return false;
  }

  isUp() {
    return false;
  }

  isDown() {
    return true;
  }

  isPlaceBomb() {
    return false;
  }

  handle(): void {
    move(0, 1);
  }
}

/**
 * Represents placing a bomb via input.
 */
class PlaceBomb implements Input {
  isRight() {
    return false;
  }

  isLeft() {
    return false;
  }

  isUp() {
    return false;
  }

  isDown() {
    return false;
  }

  isPlaceBomb() {
    return true;
  }

  handle(): void {
    placeBomb();
  }
}

/* eslint-enable require-jsdoc */

let playerX = 1;
let playerY = 1;
const map: TileEnum[][] = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 2, 2, 2, 2, 2, 1],
  [1, 0, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 2, 2, 2, 0, 0, 0, 1],
  [1, 2, 1, 2, 1, 0, 1, 0, 1],
  [1, 2, 2, 2, 2, 0, 0, 10, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const inputs: Input[] = [];

let delay = 0;
let bombs = 1;
let gameOver = false;

/**
 * Explodes a bomb on the game map.
 * @param {number} x - The horizontal position of the bomb.
 * @param {number} y - The vertical position of the bomb.
 * @param {TileEnum} type - The type of the explosion.
 * @return {void}
 */
function explode(x: number, y: number, type: TileEnum) {
  if (map[y][x] === TileEnum.STONE) {
    if (Math.random() < 0.1) map[y][x] === TileEnum.EXTRA_BOMB;
    else map[y][x] = type;
  } else if (map[y][x] !== TileEnum.UNBREAKABLE) {
    if (
      map[y][x] === TileEnum.BOMB ||
      map[y][x] === TileEnum.BOMB_CLOSE ||
      map[y][x] === TileEnum.BOMB_REALLY_CLOSE
    ) {
      bombs++;
    }
    map[y][x] = type;
  }
}

/**
 * Moves the player on the game map.
 *
 * @param {number} x - The horizontal distance to move.
 * @param {number} y - The vertical distance to move.
 * @return {void}
 */
function move(x: number, y: number) {
  if (
    map[playerY + y][playerX + x] === TileEnum.AIR ||
    map[playerY + y][playerX + x] === TileEnum.FIRE
  ) {
    playerY += y;
    playerX += x;
  } else if (map[playerY + y][playerX + x] === TileEnum.EXTRA_BOMB) {
    playerY += y;
    playerX += x;
    bombs++;
    map[playerY][playerX] = TileEnum.AIR;
  }
}

/**
 * Places a bomb on the game map.
 * @return {void}
 */
function placeBomb() {
  if (bombs > 0) {
    map[playerY][playerX] = TileEnum.BOMB;
    bombs--;
  }
}

/**
 * Checks if the game is over.
 * @return {void}
 */
function checkGameOver() {
  if (
    map[playerY][playerX] === TileEnum.FIRE ||
    map[playerY][playerX] === TileEnum.MONSTER_DOWN ||
    map[playerY][playerX] === TileEnum.MONSTER_UP ||
    map[playerY][playerX] === TileEnum.MONSTER_LEFT ||
    map[playerY][playerX] === TileEnum.MONSTER_RIGHT
  ) {
    gameOver = true;
  }
}

/**
 * Handles the inputs.
 * @return {void}
 */
function handleInputs() {
  while (!gameOver && inputs.length > 0) {
    const input = inputs.pop();
    input.handle();
  }
}

/**
 * Updates the game tile.
 * @param {number} y - The vertical position of the tile.
 * @param {number} x - The horizontal position of the tile.
 */
function updateTile(y: number, x: number) {
  if (map[y][x] === TileEnum.BOMB) {
    map[y][x] = TileEnum.BOMB_CLOSE;
  } else if (map[y][x] === TileEnum.BOMB_CLOSE) {
    map[y][x] = TileEnum.BOMB_REALLY_CLOSE;
  } else if (map[y][x] === TileEnum.BOMB_REALLY_CLOSE) {
    explode(x, y - 1, TileEnum.FIRE);
    explode(x, y + 1, TileEnum.TMP_FIRE);
    explode(x - 1, y, TileEnum.FIRE);
    explode(x + 1, y, TileEnum.TMP_FIRE);
    map[y][x] = TileEnum.FIRE;
    bombs++;
  } else if (map[y][x] === TileEnum.TMP_FIRE) {
    map[y][x] = TileEnum.FIRE;
  } else if (map[y][x] === TileEnum.FIRE) {
    map[y][x] = TileEnum.AIR;
  } else if (map[y][x] === TileEnum.TMP_MONSTER_DOWN) {
    map[y][x] = TileEnum.MONSTER_DOWN;
  } else if (map[y][x] === TileEnum.TMP_MONSTER_RIGHT) {
    map[y][x] = TileEnum.MONSTER_RIGHT;
  } else if (map[y][x] === TileEnum.MONSTER_RIGHT) {
    if (map[y][x + 1] === TileEnum.AIR) {
      map[y][x] = TileEnum.AIR;
      map[y][x + 1] = TileEnum.TMP_MONSTER_RIGHT;
    } else {
      map[y][x] = TileEnum.MONSTER_DOWN;
    }
  } else if (map[y][x] === TileEnum.MONSTER_DOWN) {
    if (map[y + 1][x] === TileEnum.AIR) {
      map[y][x] = TileEnum.AIR;
      map[y + 1][x] = TileEnum.TMP_MONSTER_DOWN;
    } else {
      map[y][x] = TileEnum.MONSTER_LEFT;
    }
  } else if (map[y][x] === TileEnum.MONSTER_LEFT) {
    if (map[y][x - 1] === TileEnum.AIR) {
      map[y][x] = TileEnum.AIR;
      map[y][x - 1] = TileEnum.MONSTER_LEFT;
    } else {
      map[y][x] = TileEnum.MONSTER_UP;
    }
  } else if (map[y][x] === TileEnum.MONSTER_UP) {
    if (map[y - 1][x] === TileEnum.AIR) {
      map[y][x] = TileEnum.AIR;
      map[y - 1][x] = TileEnum.MONSTER_UP;
    } else {
      map[y][x] = TileEnum.MONSTER_RIGHT;
    }
  }
}

/**
 * Updates the game map.
 * @return {void}
 */
function updateMap() {
  if (--delay > 0) return;
  delay = DELAY;
  for (let y = 1; y < map.length; y++) {
    for (let x = 1; x < map[y].length; x++) {
      updateTile(y, x);
    }
  }
}

/**
 * Updates the game state.
 * @return {void}
 */
function update() {
  handleInputs();
  checkGameOver();
  updateMap();
}

/**
 * Creates the game graphics (HTML canvas).
 * @return {CanvasRenderingContext2D} The graphics context.
 */
function createGraphics() {
  const canvas = <HTMLCanvasElement>document.getElementById('GameCanvas');
  const g = canvas.getContext('2d');

  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

/**
 * Colors a tile with the appropriate color.
 * @param {number} y
 * @param {number} x
 * @param {CanvasRenderingContext2D} g
 */
function fillTileWithColor(y: number, x: number, g: CanvasRenderingContext2D) {
  if (map[y][x].isUnbreakable()) g.fillStyle = '#999999';
  else if (map[y][x].isStone()) g.fillStyle = '#0000cc';
  else if (map[y][x].isExtraBomb()) g.fillStyle = '#00cc00';
  else if (map[y][x].isFire()) g.fillStyle = '#ffcc00';
  else if (
    map[y][x].isMonsterUp() ||
    map[y][x].isMonsterLeft() ||
    map[y][x].isMonsterRight() ||
    map[y][x].isMonsterDown()
  ) {
    g.fillStyle = '#cc00cc';
  } else if (map[y][x].isBomb()) g.fillStyle = '#770000';
  else if (map[y][x].isBombClose()) g.fillStyle = '#cc0000';
  else if (map[y][x].isBombReallyClose()) g.fillStyle = '#ff0000';
}

/**
 * Draws the map.
 * @param {CanvasRenderingContext2D} g - the graphics context.
 * @return {void}
 */
function drawMap(g: CanvasRenderingContext2D) {
  // Draw map
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      fillTileWithColor(y, x, g);

      if (map[y][x] !== TileEnum.AIR) {
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }
}

/**
 * Draws the player.
 * @param {CanvasRenderingContext2D} g - the graphics context.
 * @return {void}
 */
function drawPlayer(g: CanvasRenderingContext2D) {
  // Draw player
  g.fillStyle = '#00ff00';
  if (!gameOver) {
    g.fillRect(playerX * TILE_SIZE, playerY * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

/**
 * Draws the game state.
 * @return {void}
 */
function draw() {
  const g = createGraphics();
  drawMap(g);
  drawPlayer(g);
}

/**
 * The game loop.
 * @return {void}
 */
function gameLoop() {
  const before = Date.now();
  update();
  draw();
  const after = Date.now();
  const frameTime = after - before;
  const sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  gameLoop();
};

const LEFT_KEY = 'ArrowLeft';
const UP_KEY = 'ArrowUp';
const RIGHT_KEY = 'ArrowRight';
const DOWN_KEY = 'ArrowDown';
window.addEventListener('keydown', (e) => {
  if (e.key === LEFT_KEY || e.key === 'a') inputs.push(new Left());
  else if (e.key === UP_KEY || e.key === 'w') inputs.push(new Up());
  else if (e.key === RIGHT_KEY || e.key === 'd') inputs.push(new Right());
  else if (e.key === DOWN_KEY || e.key === 's') inputs.push(new Down());
  else if (e.key === ' ') inputs.push(new PlaceBomb());
});
