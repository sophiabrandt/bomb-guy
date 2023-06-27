const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;
const TPS = 2;
const DELAY = FPS / TPS;

enum RawTile {
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

  isTmpMonsterDown(): boolean;

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

  isTmpMonsterDown(): boolean {
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

  isTmpMonsterDown(): boolean {
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

  isTmpMonsterDown(): boolean {
    return false;
  }
}

/**
 * Represents a bomb tile.
 */
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

  isTmpMonsterDown(): boolean {
    return false;
  }
}

/**
 * Represents a close bomb tile.
 */
class BombCloseTile implements Tile {
  isAir(): boolean {
    return false;
  }

  isBomb(): boolean {
    return false;
  }

  isBombClose(): boolean {
    return true;
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
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return false;
  }
}

/**
 * Represents a really close bomb tile.
 */
class BombReallyCloseTile implements Tile {
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
    return true;
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
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
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

  isTmpMonsterDown(): boolean {
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

  isTmpMonsterDown(): boolean {
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

  isTmpMonsterDown(): boolean {
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

  isTmpMonsterDown(): boolean {
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

  isTmpMonsterDown(): boolean {
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

  isTmpMonsterDown(): boolean {
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

  isTmpMonsterDown(): boolean {
    return false;
  }
}

/**
 * Represents a temporary Monster DOWN tile.
 */
class TmpMonsterDownTile implements Tile {
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
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isTmpMonsterDown(): boolean {
    return true;
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

  isTmpMonsterDown(): boolean {
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
const rawMap: RawTile[][] = [
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

const map: Tile[][] = rawMap.map((row) =>
  row.map((tile) => transformTile(tile))
);

/**
 * Throws an error indicating that the provided value is of type `never`,
 * meaning it should never occur in a valid code execution.
 *
 * @param {never} value - The value that should never occur.
 * @throws {Error} Throws an error with a message.
 */
function assertNever(value: never): never {
  throw new Error(`Unexpected object: ${JSON.stringify(value)}`);
}

/**
 * Transforms a raw tile into a tile.
 * @param {RawTile}tile
 * @return {Tile} The transformed tile.
 */
function transformTile(tile: RawTile): Tile {
  switch (tile) {
    case RawTile.AIR:
      return new AirTile();
    case RawTile.BOMB:
      return new BombTile();
    case RawTile.BOMB_CLOSE:
      return new BombCloseTile();
    case RawTile.BOMB_REALLY_CLOSE:
      return new BombReallyCloseTile();
    case RawTile.EXTRA_BOMB:
      return new ExtraBombTile();
    case RawTile.FIRE:
      return new FireTile();
    case RawTile.MONSTER_DOWN:
      return new MonsterDownTile();
    case RawTile.MONSTER_LEFT:
      return new MonsterLeftTile();
    case RawTile.MONSTER_RIGHT:
      return new MonsterRightTile();
    case RawTile.MONSTER_UP:
      return new MonsterUpTile();
    case RawTile.STONE:
      return new StoneTile();
    case RawTile.TMP_FIRE:
      return new TmpFireTile();
    case RawTile.TMP_MONSTER_RIGHT:
      return new TmpMonsterRightTile();
    case RawTile.TMP_MONSTER_DOWN:
      return new TmpMonsterDownTile();
    case RawTile.UNBREAKABLE:
      return new UnbreakableTile();
    default:
      assertNever(tile);
  }
}

const inputs: Input[] = [];

let delay = 0;
let bombs = 1;
let gameOver = false;

/**
 * Explodes a bomb on the game map.
 * @param {number} x - The horizontal position of the bomb.
 * @param {number} y - The vertical position of the bomb.
 * @param {Tile} type - The type of the explosion.
 * @return {void}
 */
function explode(x: number, y: number, type: Tile) {
  if (map[y][x].isStone()) {
    if (Math.random() < 0.1) map[y][x].isExtraBomb();
    else map[y][x] = type;
  } else if (!map[y][x].isUnbreakable()) {
    if (
      map[y][x].isBomb() ||
      map[y][x].isBombClose() ||
      map[y][x].isBombReallyClose()
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
    map[playerY + y][playerX + x].isAir() ||
    map[playerY + y][playerX + x].isFire()
  ) {
    playerY += y;
    playerX += x;
  } else if (map[playerY + y][playerX + x].isExtraBomb()) {
    playerY += y;
    playerX += x;
    bombs++;
    map[playerY][playerX] = new AirTile();
  }
}

/**
 * Places a bomb on the game map.
 * @return {void}
 */
function placeBomb() {
  if (bombs > 0) {
    map[playerY][playerX] = new BombTile();
    bombs--;
  }
}

/**
 * Checks if the game is over.
 * @return {void}
 */
function checkGameOver() {
  if (
    map[playerY][playerX].isFire() ||
    map[playerY][playerX].isMonsterDown() ||
    map[playerY][playerX].isMonsterUp() ||
    map[playerY][playerX].isMonsterLeft() ||
    map[playerY][playerX].isMonsterRight()
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
  if (map[y][x].isBomb()) {
    map[y][x] = new BombCloseTile();
  } else if (map[y][x].isBombClose()) {
    map[y][x] = new BombReallyCloseTile();
  } else if (map[y][x].isBombReallyClose()) {
    explode(x, y - 1, new FireTile());
    explode(x, y + 1, new TmpFireTile());
    explode(x - 1, y, new FireTile());
    explode(x + 1, y, new TmpFireTile());
    map[y][x] = new FireTile();
    bombs++;
  } else if (map[y][x].isTmpFire()) {
    map[y][x] = new FireTile();
  } else if (map[y][x].isFire()) {
    map[y][x] = new AirTile();
  } else if (map[y][x].isTmpMonsterDown()) {
    map[y][x] = new MonsterDownTile();
  } else if (map[y][x].isTmpMonsterRight()) {
    map[y][x] = new MonsterRightTile();
  } else if (map[y][x].isMonsterRight()) {
    if (map[y][x + 1].isAir()) {
      map[y][x] = new AirTile();
      map[y][x + 1] = new TmpMonsterRightTile();
    } else {
      map[y][x] = new MonsterDownTile();
    }
  } else if (map[y][x].isMonsterDown()) {
    if (map[y + 1][x].isAir()) {
      map[y][x] = new AirTile();
      map[y + 1][x] = new TmpMonsterDownTile();
    } else {
      map[y][x] = new MonsterLeftTile();
    }
  } else if (map[y][x].isMonsterLeft()) {
    if (map[y][x - 1].isAir()) {
      map[y][x] = new AirTile();
      map[y][x - 1] = new MonsterLeftTile();
    } else {
      map[y][x] = new MonsterUpTile();
    }
  } else if (map[y][x].isMonsterUp()) {
    if (map[y - 1][x].isAir()) {
      map[y][x] = new AirTile();
      map[y - 1][x] = new MonsterUpTile();
    } else {
      map[y][x] = new MonsterRightTile();
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

      if (!map[y][x].isAir()) {
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
