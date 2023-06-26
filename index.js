var TILE_SIZE = 30;
var FPS = 30;
var SLEEP = 1000 / FPS;
var TPS = 2;
var DELAY = FPS / TPS;
var Tile;
(function (Tile) {
    Tile[Tile["AIR"] = 0] = "AIR";
    Tile[Tile["UNBREAKABLE"] = 1] = "UNBREAKABLE";
    Tile[Tile["STONE"] = 2] = "STONE";
    Tile[Tile["BOMB"] = 3] = "BOMB";
    Tile[Tile["BOMB_CLOSE"] = 4] = "BOMB_CLOSE";
    Tile[Tile["BOMB_REALLY_CLOSE"] = 5] = "BOMB_REALLY_CLOSE";
    Tile[Tile["TMP_FIRE"] = 6] = "TMP_FIRE";
    Tile[Tile["FIRE"] = 7] = "FIRE";
    Tile[Tile["EXTRA_BOMB"] = 8] = "EXTRA_BOMB";
    Tile[Tile["MONSTER_UP"] = 9] = "MONSTER_UP";
    Tile[Tile["MONSTER_RIGHT"] = 10] = "MONSTER_RIGHT";
    Tile[Tile["TMP_MONSTER_RIGHT"] = 11] = "TMP_MONSTER_RIGHT";
    Tile[Tile["MONSTER_DOWN"] = 12] = "MONSTER_DOWN";
    Tile[Tile["TMP_MONSTER_DOWN"] = 13] = "TMP_MONSTER_DOWN";
    Tile[Tile["MONSTER_LEFT"] = 14] = "MONSTER_LEFT";
})(Tile || (Tile = {}));
var Input;
(function (Input) {
    Input[Input["UP"] = 0] = "UP";
    Input[Input["DOWN"] = 1] = "DOWN";
    Input[Input["LEFT"] = 2] = "LEFT";
    Input[Input["RIGHT"] = 3] = "RIGHT";
    Input[Input["PLACE"] = 4] = "PLACE";
})(Input || (Input = {}));
var playerx = 1;
var playery = 1;
var map = [
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
var inputs = [];
var delay = 0;
var bombs = 1;
var gameOver = false;
/**
 * Explodes a bomb on the game map.
 * @param {number} x - The horizontal position of the bomb.
 * @param {number} y - The vertical position of the bomb.
 * @param {Tile} type - The type of the explosion.
 * @return {void}
 */
function explode(x, y, type) {
    if (map[y][x] === Tile.STONE) {
        if (Math.random() < 0.1)
            map[y][x] = Tile.EXTRA_BOMB;
        else
            map[y][x] = type;
    }
    else if (map[y][x] !== Tile.UNBREAKABLE) {
        if (map[y][x] === Tile.BOMB ||
            map[y][x] === Tile.BOMB_CLOSE ||
            map[y][x] === Tile.BOMB_REALLY_CLOSE) {
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
function move(x, y) {
    if (map[playery + y][playerx + x] === Tile.AIR ||
        map[playery + y][playerx + x] === Tile.FIRE) {
        playery += y;
        playerx += x;
    }
    else if (map[playery + y][playerx + x] === Tile.EXTRA_BOMB) {
        playery += y;
        playerx += x;
        bombs++;
        map[playery][playerx] = Tile.AIR;
    }
}
/**
 * Places a bomb on the game map.
 * @return {void}
 */
function placeBomb() {
    if (bombs > 0) {
        map[playery][playerx] = Tile.BOMB;
        bombs--;
    }
}
/**
 * Updates the game state.
 * @return {void}
 */
function update() {
    while (!gameOver && inputs.length > 0) {
        var current = inputs.pop();
        if (current === Input.LEFT)
            move(-1, 0);
        else if (current === Input.RIGHT)
            move(1, 0);
        else if (current === Input.UP)
            move(0, -1);
        else if (current === Input.DOWN)
            move(0, 1);
        else if (current === Input.PLACE)
            placeBomb();
    }
    if (map[playery][playerx] === Tile.FIRE ||
        map[playery][playerx] === Tile.MONSTER_DOWN ||
        map[playery][playerx] === Tile.MONSTER_UP ||
        map[playery][playerx] === Tile.MONSTER_LEFT ||
        map[playery][playerx] === Tile.MONSTER_RIGHT) {
        gameOver = true;
    }
    if (--delay > 0)
        return;
    delay = DELAY;
    for (var y = 1; y < map.length; y++) {
        for (var x = 1; x < map[y].length; x++) {
            if (map[y][x] === Tile.BOMB) {
                map[y][x] = Tile.BOMB_CLOSE;
            }
            else if (map[y][x] === Tile.BOMB_CLOSE) {
                map[y][x] = Tile.BOMB_REALLY_CLOSE;
            }
            else if (map[y][x] === Tile.BOMB_REALLY_CLOSE) {
                explode(x + 0, y - 1, Tile.FIRE);
                explode(x + 0, y + 1, Tile.TMP_FIRE);
                explode(x - 1, y + 0, Tile.FIRE);
                explode(x + 1, y + 0, Tile.TMP_FIRE);
                map[y][x] = Tile.FIRE;
                bombs++;
            }
            else if (map[y][x] === Tile.TMP_FIRE) {
                map[y][x] = Tile.FIRE;
            }
            else if (map[y][x] === Tile.FIRE) {
                map[y][x] = Tile.AIR;
            }
            else if (map[y][x] === Tile.TMP_MONSTER_DOWN) {
                map[y][x] = Tile.MONSTER_DOWN;
            }
            else if (map[y][x] === Tile.TMP_MONSTER_RIGHT) {
                map[y][x] = Tile.MONSTER_RIGHT;
            }
            else if (map[y][x] === Tile.MONSTER_RIGHT) {
                if (map[y][x + 1] === Tile.AIR) {
                    map[y][x] = Tile.AIR;
                    map[y][x + 1] = Tile.TMP_MONSTER_RIGHT;
                }
                else {
                    map[y][x] = Tile.MONSTER_DOWN;
                }
            }
            else if (map[y][x] === Tile.MONSTER_DOWN) {
                if (map[y + 1][x] === Tile.AIR) {
                    map[y][x] = Tile.AIR;
                    map[y + 1][x] = Tile.TMP_MONSTER_DOWN;
                }
                else {
                    map[y][x] = Tile.MONSTER_LEFT;
                }
            }
            else if (map[y][x] === Tile.MONSTER_LEFT) {
                if (map[y][x - 1] === Tile.AIR) {
                    map[y][x] = Tile.AIR;
                    map[y][x - 1] = Tile.MONSTER_LEFT;
                }
                else {
                    map[y][x] = Tile.MONSTER_UP;
                }
            }
            else if (map[y][x] === Tile.MONSTER_UP) {
                if (map[y - 1][x] === Tile.AIR) {
                    map[y][x] = Tile.AIR;
                    map[y - 1][x] = Tile.MONSTER_UP;
                }
                else {
                    map[y][x] = Tile.MONSTER_RIGHT;
                }
            }
        }
    }
}
/**
 * Draws the game state.
 * @return {void}
 */
function draw() {
    var canvas = document.getElementById('GameCanvas');
    var g = canvas.getContext('2d');
    g.clearRect(0, 0, canvas.width, canvas.height);
    // Draw map
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {
            if (map[y][x] === Tile.UNBREAKABLE)
                g.fillStyle = '#999999';
            else if (map[y][x] === Tile.STONE)
                g.fillStyle = '#0000cc';
            else if (map[y][x] === Tile.EXTRA_BOMB)
                g.fillStyle = '#00cc00';
            else if (map[y][x] === Tile.FIRE)
                g.fillStyle = '#ffcc00';
            else if (map[y][x] === Tile.MONSTER_UP ||
                map[y][x] === Tile.MONSTER_LEFT ||
                map[y][x] === Tile.MONSTER_RIGHT ||
                map[y][x] === Tile.MONSTER_DOWN) {
                g.fillStyle = '#cc00cc';
            }
            else if (map[y][x] === Tile.BOMB)
                g.fillStyle = '#770000';
            else if (map[y][x] === Tile.BOMB_CLOSE)
                g.fillStyle = '#cc0000';
            else if (map[y][x] === Tile.BOMB_REALLY_CLOSE)
                g.fillStyle = '#ff0000';
            if (map[y][x] !== Tile.AIR) {
                g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }
    // Draw player
    g.fillStyle = '#00ff00';
    if (!gameOver) {
        g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
}
/**
 * The game loop.
 * @return {void}
 */
function gameLoop() {
    var before = Date.now();
    update();
    draw();
    var after = Date.now();
    var frameTime = after - before;
    var sleep = SLEEP - frameTime;
    setTimeout(function () { return gameLoop(); }, sleep);
}
window.onload = function () {
    gameLoop();
};
var LEFT_KEY = 'ArrowLeft';
var UP_KEY = 'ArrowUp';
var RIGHT_KEY = 'ArrowRight';
var DOWN_KEY = 'ArrowDown';
window.addEventListener('keydown', function (e) {
    if (e.key === LEFT_KEY || e.key === 'a')
        inputs.push(Input.LEFT);
    else if (e.key === UP_KEY || e.key === 'w')
        inputs.push(Input.UP);
    else if (e.key === RIGHT_KEY || e.key === 'd')
        inputs.push(Input.RIGHT);
    else if (e.key === DOWN_KEY || e.key === 's')
        inputs.push(Input.DOWN);
    else if (e.key === ' ')
        inputs.push(Input.PLACE);
});
