var w = window.innerWidth;
var h = window.innerHeight;

var playing = false;
var started = false;
var mode = false;
var stsrt = false;

function SaveHighestScore(value) {
    localStorage.setItem("HighestScore", value);
}

function getHighestScore() {
    return localStorage.getItem('HighestScore');
}

function clearScore() {
    localStorage.clear();
}

function SinglePlayer() {
    stsrt = true;
    playing = false;
    mode = false;
    document.getElementById("pausedH1").innerHTML = "Paused";
    document.getElementById("Game").style.display = "block";
    document.getElementById("Pause").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("p2Info").style.display = "none";
    document.getElementById("p2Info2").style.display = "none";
    document.getElementById("points").style.color = "white";
    document.getElementById("BntResume").style.display = "none";
    document.getElementById("BntStop").disabled  = true;
    document.getElementById("BntStop").style.backgroundColor = "#2196f3";
    document.getElementById("body").style.backgroundColor = "#190b41";
    document.getElementById("Pause").style.boxShadow = " -3px 0px 30px 0px #190b41 inset, 3px 0px 30px 0px #190b41 inset, 0px -3px 30px 0px #190b41 inset, 0px 3px 30px 0px #190b41 inset";
    document.getElementById("Pause").style.backgroundColor = "#ffffff";
    document.getElementById("pausedH1").style.textShadow = " 0px -1px 3px #2196f3, 0px 1px 3px #2196f3,-1px 0px 3px #2196f3, 1px 0px 3px #2196f3, -6px 0px 10px #2196f3, 6px 0px 10px #2196f3, 0px -6px 10px #2196f3, 0px 6px 10px #2196f3";
    document.getElementById("btnBack").style.backgroundColor = "#2196f3";
    document.getElementById("BntStart").style.backgroundColor = "#2196f3";
    var highestScore = getHighestScore();
    document.getElementById("points2").style.display = "block";
    document.getElementById("points2").style.color = "white";
    document.getElementById("points2").innerHTML= "The highest Score is: " + highestScore;
    game.players["player1"] = { x: 1, y: 1 }
    game.players["player2"] = { x: 101, y: -73 }
    color = "#0000ff";
    txt1 = "Your socre is: ";
    

    clearTimeout(myFruit)
    clearTimeout(myEnimy)
    clearTimeout(mySkill)
    clearInterval(mySkill)
    clearTimeout(myReplace2)
    clearInterval(myReplace2)
    point = 0;
    

    for (const FruitID in game.fruits) {
        const fruit = game.fruits[FruitID];
        context.fillStyle = 'white';
        context.clearRect(fruit.x, fruit.y, 1, 1);
        fruit.x = -1;
        fruit.y = -1;
        delete fruit;
    }
    for (const skillID in game.skills) {
        const skill = game.skills[skillID];
        skill.x = -1;
        skill.y = -1;
    }
    game.enimies['enimy1'] = { x: 18, y: 18 }
    //game.enimies['enimy1'] = {x: 101, y: 73}

}

function MuiltPlayer() {
    stsrt = true;
     playing = false;
     document.getElementById("pausedH1").innerHTML = "Paused";
    document.getElementById("Game").style.display = "block";
    document.getElementById("Pause").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("points").style.color = "#88aef5";
    document.getElementById("points2").style.color = "#f14e4e";
    document.getElementById("Pause").style.backgroundColor = "#ffffff";
    document.getElementById("p2Info").style.display = "block";
    document.getElementById("p2Info2").style.display = "block";
    document.getElementById("BntResume").style.display = "none";
    document.getElementById("BntStop").disabled  = true;
    document.getElementById("pausedH1").style.textShadow = " 0px -1px 3px #2196f3, 0px 1px 3px #2196f3,-1px 0px 3px #2196f3, 1px 0px 3px #2196f3, -6px 0px 10px #2196f3, 6px 0px 10px #2196f3, 0px -6px 10px #2196f3, 0px 6px 10px #2196f3";
    document.getElementById("BntStop").style.backgroundColor = "#2196f3";

    document.getElementById("body").style.backgroundColor = "#190b41";
    document.getElementById("Pause").style.boxShadow = " -3px 0px 30px 0px #190b41 inset, 3px 0px 30px 0px #190b41 inset, 0px -3px 30px 0px #190b41 inset, 0px 3px 30px 0px #190b41 inset";



   // document.getElementById("BntStart").style.width = "300px";
    document.getElementById("BntStart").style.backgroundColor = "#2196f3";
    document.getElementById("btnBack").style.backgroundColor = "#2196f3";
  //  document.getElementById("btnBack").style.width = "300px";



    clearTimeout(myFruit)
    clearTimeout(myEnimy)
    clearTimeout(mySkill)
    clearInterval(mySkill)
    point = 5;
    point2 = 5;

    game.players["player2"] = { x: 18, y: 1 }
    game.players["player1"] = { x: 1, y: 1 }

    txt1 = "Blue Player Score: ";
    txt2 = "Red Player Score: ";

    for (const FruitID in game.fruits) {
        const fruit = game.fruits[FruitID];
        context.fillStyle = 'white';
        context.clearRect(fruit.x, fruit.y, 1, 1);
        fruit.x = -1;
        fruit.y = -1;
        delete fruit;
    }
    for (const skillID in game.skills) {
        const skill = game.skills[skillID];
        skill.x = -1;
        skill.y = -1;
    }
    game.enimies['enimy1'] = { x: 101, y: 73 }
    mode = true;
}

function goBack() {
    stsrt = false;
    document.getElementById("Pause").style.display = "none";
    document.getElementById("intro").style.display = "block";
    document.getElementById("Game").style.display = "none";
    document.getElementById("pausedH1").innerHTML = "Paused";
    document.getElementById("BntStop").style.backgroundColor = "#2196f3";
    document.getElementById("BntStart").style.backgroundColor = "#2196f3";
    document.getElementById("btnBack").style.backgroundColor = "#2196f3";
    document.getElementById("body").style.backgroundColor = "#190b41";
    document.getElementById("Pause").style.boxShadow = " -3px 0px 30px 0px #190b41 inset, 3px 0px 30px 0px #190b41 inset, 0px -3px 30px 0px #190b41 inset, 0px 3px 30px 0px #190b41 inset";
    clearTimeout(myFruit)
    clearTimeout(myEnimy)
    clearTimeout(mySkill)
    clearInterval(mySkill)
    clearTimeout(myReplace2)
    clearInterval(myReplace2)
    point = 0;
    point2 = 0;
    for (const FruitID in game.fruits) {
        const fruit = game.fruits[FruitID];
        context.fillStyle = 'white';
        context.clearRect(fruit.x, fruit.y, 1, 1);
        fruit.x = -1;
        fruit.y = -1;
        delete fruit;
    }
    for (const skillID in game.skills) {
        const skill = game.skills[skillID];
        skill.x = -1;
        skill.y = -1;
    }
    playing = false;
    started = false;
    game.enimies['enimy1'] = { x: 101, y: 73 }
}
//myFruit
var myFruit = setInterval(count, 1000);
var myEnimy = setInterval(count, 1000);
var mySkill = setInterval(count, 1000);
var myClearPLayer = setInterval(count, 1000);
var myClearPLayer2 = setInterval(count, 1000);
var myFreeze = setInterval(count, 1000);
var myStop = setInterval(count, 1000);
var myFire = setInterval(count, 1000);
var myNoShoot = setInterval(count, 1000);
var mybringBack = setInterval(count, 1000);
var myReplace1 = setInterval(count, 1000);
var myReplace2 = setInterval(count, 1000);


function count() { var number = 0; number++; }

//game
const screen = document.getElementById('screen');
const context = screen.getContext('2d');
const currentPlayerID = 'player1';
const currentPlayer2 = 'player2';
const currentEnimy = 'enimy1';
var fruit_ID = 0;

function clearPlayer1() {
    color = '#0000ff';
}
function clearPlayer2() {
    color2 = "#ff0000";
}
function replacePlayer1() {
    clearTimeout(myReplace1)
    clearInterval(myReplace1)
    game.players['player1'] = { x: 1, y: 1 }
}
function replacePlayer2() {
    clearTimeout(myReplace2)
    clearInterval(myReplace2)
    game.players['player2'] = { x: 18, y: 1 }
}
var resetEnemy = false;
function StopAll() {
    clearTimeout(myFruit);
    clearTimeout(mySkill);
    clearInterval(myEnimy);
    clearTimeout(myEnimy);
    playing = false;

    if(stsrt){
           document.getElementById("Pause").style.display = "block";
    }
    else {
        document.getElementById("Pause").style.display = "none";

    }
 /*
    document.getElementById("BntStart").style.width = "200px";
    document.getElementById("btnBack").style.width = "200px";
    */
    document.getElementById("BntResume").style.display = "inline";
    document.getElementById("pausedH1").style.textShadow = " 0px -1px 3px #2196f3, 0px 1px 3px #2196f3,-1px 0px 3px #2196f3, 1px 0px 3px #2196f3, -6px 0px 10px #2196f3, 6px 0px 10px #2196f3, 0px -6px 10px #2196f3, 0px 6px 10px #2196f3";
    document.getElementById("pausedH1").innerHTML = "Paused";
    document.getElementById("Pause").style.backgroundColor = "#ffffff";
    
    document.getElementById("BntStart").style.backgroundColor = "#2196f3";
    
    document.getElementById("BntStop").style.backgroundColor = "#2196f3";

    document.getElementById("body").style.backgroundColor = "#190b41";
    document.getElementById("Pause").style.boxShadow = " -3px 0px 30px 0px #190b41 inset, 3px 0px 30px 0px #190b41 inset, 0px -3px 30px 0px #190b41 inset, 0px 3px 30px 0px #190b41 inset";

    document.getElementById("btnBack").style.backgroundColor = "#2196f3";
    resetEnemy = true;
}

function Resume() {
    if (started) {
        playing = true;
        clearInterval(myEnimy);
        clearTimeout(myEnimy);
        myEnimy = setInterval(anemyFuction, 300);
        mySkill = setInterval(addSkill, 10000);
        myFruit = setInterval(addFruit, 2000);

        document.getElementById("Pause").style.display = "none";

    }
}

function StartGame() {
    playing = true;
    started = true;
    document.getElementById("BntStop").style.backgroundColor = "#2196f3";
    document.getElementById("body").style.backgroundColor = "#190b41";
    document.getElementById("Pause").style.boxShadow = " -3px 0px 30px 0px #190b41 inset, 3px 0px 30px 0px #190b41 inset, 0px -3px 30px 0px #190b41 inset, 0px 3px 30px 0px #190b41 inset";

    document.getElementById("BntStop").disabled  = false;
    point = 0;
    point2 = 0;
    clearTimeout(myReplace2)
    clearInterval(myReplace2)
    clearInterval(myEnimy);
    clearTimeout(myEnimy);
    clearInterval(myFruit);
    clearTimeout(myFruit);
    clearInterval(mySkill);
    clearTimeout(mySkill);

    mySkill = setInterval(addSkill, 10000);
    myFruit = setInterval(addFruit, 2000);
    color = "#0000ff"; //blue
    color2 = "#ff0000"; //red
    addEnimy();
    game.players['player1'] = { x: 1, y: 1 }
    document.getElementById("Pause").style.display = "none";
    if (mode) {
        game.players['player2'] = {x:18,y:1}
    }
    for (const skillID in game.skills) {
        const skill = game.skills[skillID];
        skill.x = -1;
        skill.y = -1;
    }
    for (const FruitID in game.fruits) {
        const fruit = game.fruits[FruitID];
        context.fillStyle = 'white';
        context.clearRect(fruit.x, fruit.y, 1, 1);
        fruit.x = -1;
        fruit.y = -1;
        delete fruit;
    }
}
function addEnimy() {
    if (playing) {
        clearInterval(myEnimy);
        clearTimeout(myEnimy);
        myEnimy = setInterval(anemyFuction, 300);
    var num1 = (Math.round(Math.random() * 10) + Math.round(Math.random() * 10));
    var num2 = (10 + Math.round(Math.random() * 10));

        if (resetEnemy) {
                game.enimies['enimy1'] = { x: num1, y: num2 }
            }
        }
    }

function addFruit() {

    var num1 = (Math.round(Math.random() * 10) + Math.round(Math.random() * 10));
    var num2 = (Math.round(Math.random() * 10) + Math.round(Math.random() * 10));
    fruit_ID++;
    game.fruits[fruit_ID] = { x: num1, y: num2 }
}
function addSkill() {


    var num3 = (Math.round(Math.random() * 10) + Math.round(Math.random() * 10));
    var num4 = (Math.round(Math.random() * 10) + Math.round(Math.random() * 10));

    var num5 = Math.round(Math.random() * 10);
    var skill = '';

    if (num5 > 5) {
        skill = 'shield';
    }
    else if (num5 <= 5) {
        skill = 'gun';
    }
    const shield = game.skills[skill];
    if (shield.x != num3 || shield.y != num4) {
        game.skills[skill] = { x: num3, y: num4 }
    }
}


const game = {
    players: {
        'player1': { x: 1, y: 1 },
        'player2': { x: 101, y: -73 }
    },
    fruits: {
        fruit_ID: { x: -1, y: -1 }
    },
    enimies: {
        'enimy1': { x: 102, y: 73 },
    },
    skills: {
        'shield': { x: 102, y: 73 },
        'gun': { x: 102, y: 73 }
    },
    effect: {
        'fireShot' : { x: 110, y: 73 }
    }

}
function NoFire() {
    const fireBall = game.effect['fireShot'];
    clearInterval(myFire);
    clearTimeout(myFire);
    fireBall.x = 90;
    fireBall.y = -73;
}

function shootUP() {
    const fireBall = game.effect['fireShot'];
    fireBall.y = fireBall.y - 1;

}
function shootDown() {
    const fireBall = game.effect['fireShot'];
    fireBall.y = fireBall.y + 1;

}
function shootLeft() {
    const fireBall = game.effect['fireShot'];
    fireBall.x = fireBall.x - 1;

}
function shootRight() {
    const fireBall = game.effect['fireShot'];
    fireBall.x = fireBall.x + 1;

}

document.addEventListener('keydown', handleKeydown);
var shoot = false;
var shoot2 = false;
var direction2 = "";

function handleKeydown(event) {
    const keyPressed = event.key;
    const player = game.players[currentPlayerID];
    const player2 = game.players[currentPlayer2];
    const fireBall = game.effect['fireShot'];

    console.log(`game.movePlayerMoving -> ${player} with ${event.key}`);

    if (playing) {
        if (color === '#ffff00') {
            if (keyPressed === ' ') {
                shoot = true;
            }
            if (shoot) {
                if (keyPressed === 'ArrowUp' && player.y - 1 >= 0) {

                    NoFire();
                    fireBall.y = player.y - 1;
                    fireBall.x = player.x;
                    myFire = setInterval(shootUP, 100);
                    myNoShoot = setTimeout(NoFire, 4000);
                    color = '#0000ff';
                    shoot = false;

                    return
                }
                if (keyPressed === 'ArrowDown' && player.y + 1 < screen.height) {

                    NoFire();
                    fireBall.y = player.y + 1;
                    fireBall.x = player.x;
                    myFire = setInterval(shootDown, 100);
                    myNoShoot = setTimeout(NoFire, 4000);
                    color = '#0000ff';
                    shoot = false;
                    return
                }
                if (keyPressed === 'ArrowLeft' && player.x - 1 >= 0) {

                    NoFire();
                    fireBall.x = player.x - 1;
                    fireBall.y = player.y;
                    myFire = setInterval(shootLeft, 100);
                    myNoShoot = setTimeout(NoFire, 4000);
                    color = '#0000ff';
                    shoot = false;
                    return
                }
                if (keyPressed === 'ArrowRight' && player.x + 1 < screen.width) {

                    NoFire();
                    fireBall.x = player.x + 1;
                    fireBall.y = player.y;
                    myFire = setInterval(shootRight, 100);
                    myNoShoot = setTimeout(NoFire, 4000);
                    color = '#0000ff';
                    shoot = false;
                    return
                }
            }
        }


        if (keyPressed === 'ArrowUp' && player.y - 1 >= 0) {
            player.y = player.y - 1;
            return
        }
        if (keyPressed === 'ArrowDown' && player.y + 1 < screen.height) {
            player.y = player.y + 1;
            return
        }
        if (keyPressed === 'ArrowLeft' && player.x - 1 >= 0) {
            player.x = player.x - 1;
            return
        }
        if (keyPressed === 'ArrowRight' && player.x + 1 < screen.width) {
            player.x = player.x + 1;
            return
        }

        //player 2
        if (player2 && player2.x < 100) {
            if (color2 === '#ffff00') {
                if (keyPressed === 'Shift') {
                    shoot2 = true;
                }
                if (shoot2) {
                    if (keyPressed === 'w' && player2.y - 1 >= 0) {

                        NoFire();
                        fireBall.y = player2.y - 1;
                        fireBall.x = player2.x;
                        myFire = setInterval(shootUP, 100);
                        myNoShoot = setTimeout(NoFire, 4000);
                        color2 = '#ff0000';
                        shoot2 = false;
                        return
                    }
                    if (keyPressed === 's' && player2.y + 1 < screen.height) {

                        NoFire();
                        fireBall.y = player2.y + 1;
                        fireBall.x = player2.x;
                        myFire = setInterval(shootDown, 100);
                        myNoShoot = setTimeout(NoFire, 4000);
                        color2 = '#ff0000';
                        shoot2 = false;
                        return
                    }
                    if (keyPressed === 'a' && player2.x - 1 >= 0) {

                        NoFire();
                        fireBall.x = player2.x - 1;
                        fireBall.y = player2.y;
                        myFire = setInterval(shootLeft, 100);
                        myNoShoot = setTimeout(NoFire, 4000);
                        color2 = '#ff0000';
                        shoot2 = false;
                        return
                    }
                    if (keyPressed === 'd' && player2.x + 1 < screen.width) {

                        NoFire();
                        fireBall.x = player2.x + 1;
                        fireBall.y = player2.y;
                        myFire = setInterval(shootRight, 100);
                        myNoShoot = setTimeout(NoFire, 4000);
                        color2 = '#ff0000';
                        shoot2 = false;
                        return
                    }
                }
            }
            if (keyPressed === 'w' && player2.y - 1 >= 0) {

                player2.y = player2.y - 1;
                return
            }
            if (keyPressed === 's' && player2.y + 1 < screen.height) {
                player2.y = player2.y + 1;
                return
            }
            if (keyPressed === 'a' && player2.x - 1 >= 0) {
                player2.x = player2.x - 1;
                return
            }
            if (keyPressed === 'd' && player2.x + 1 < screen.width) {
                player2.x = player2.x + 1;
                return
            }
        }

    }
}

function activateEnimy() {
    clearInterval(myEnimy);
    clearTimeout(myEnimy);
    myEnimy = setInterval(anemyFuction, 300);
}



function anemyFuction() {
    const fireBall = game.effect['fireShot'];
    const enimy = game.enimies[currentEnimy];
    var player1 = game.players[currentPlayerID];
    var alive = true;
    const player2 = game.players[currentPlayer2];
    var player = game.players[currentPlayerID];
    var P1_X = Math.abs(player1.x - enimy.x);
    var P1_Y = Math.abs(player1.y - enimy.y);
    var P2_X = Math.abs(player2.x - enimy.x);
    var P2_Y = Math.abs(player2.y - enimy.y);



    if (playing) {
        if (enimy && enimy.x < 100) {
            if (game.players[currentPlayer2].x < 100) {
                //decisions

                if (P1_Y < P2_Y && P1_X < P2_X) {
                    player = game.players[currentPlayerID];
                }
                if (P2_Y < P1_Y && P2_X < P1_X) {
                    player = game.players[currentPlayer2];
                }

                if (P1_X < P2_X && P2_X < P1_Y && P2_Y < P1_Y) {
                    player = game.players[currentPlayer2];
                }
                if (P1_X > P2_X && P2_X < P1_Y && P2_Y > P1_Y) {
                    player = game.players[currentPlayerID];
                }

                if (P1_Y < P2_Y && P2_X < P1_X && P2_Y < P1_X) {
                    player = game.players[currentPlayer2];
                }
                if (P1_Y > P2_Y && P2_X > P1_X && P2_Y > P1_X) {
                    player = game.players[currentPlayerID];
                }

                if (P1_Y == P2_Y && P1_X < P2_X) {
                    player = game.players[currentPlayerID];
                }
                if (P1_Y == P2_Y && P1_X > P2_X) {
                    player = game.players[currentPlayer2];
                }

                if (P1_X == P2_X && P1_Y < P2_Y) {
                    player = game.players[currentPlayerID];
                }
                if (P1_X == P2_X && P1_Y > P2_Y) {
                    player = game.players[currentPlayer2];
                }
            }

            if (game.players[currentPlayerID].x > 99 && game.players[currentPlayer2].x > 99) {
                alive = false;
            }
            if (game.players[currentPlayerID].x < 100 || game.players[currentPlayer2].x < 100) {
                alive = true;
            }
            if (alive) {
                //Y Up
                if (player.y < enimy.y && enimy.y - 1 >= 0) {
                    //avoid
                    if ((enimy.x + 1 == fireBall.x && fireBall.y <= enimy.y) || (enimy.x - 1 == fireBall.x && fireBall.y <= enimy.y)) {
                        enimy.y = enimy.y - 1;
                        return;
                    }
                    //Up Left
                    if (player.x < enimy.x && enimy.x - 1 >= 0) {
                        if ((enimy.y - 1 == fireBall.y && fireBall.x <= enimy.x) || (enimy.y + 1 == fireBall.y && fireBall.x <= enimy.x)) {
                            enimy.x = enimy.x - 1;
                            return;
                        }
                        enimy.y = enimy.y - 1;
                        enimy.x = enimy.x - 1;
                        return
                    }
                    //Up Right
                    if (player.x > enimy.x && enimy.x + 1 < screen.width) {
                        if ((enimy.y - 1 == fireBall.y && fireBall.x >= enimy.x) || (enimy.y + 1 == fireBall.y && fireBall.x >= enimy.x)) {
                            enimy.x = enimy.x + 1;
                            return;
                        }
                        enimy.x = enimy.x + 1;
                        enimy.y = enimy.y - 1;
                        return
                    }
                    //dudge
                    if (fireBall.x == enimy.x && fireBall.y <= enimy.y) {
                        enimy.y = enimy.y - 1;
                        enimy.x = enimy.x - 1;
                        return;
                    }
                    //Up
                    enimy.y = enimy.y - 1;
                    return
                }
                //Y Down
                if (player.y > enimy.y && enimy.y + 1 < screen.height) {
                    //avoid
                    if ((enimy.x + 1 == fireBall.x && fireBall.y >= enimy.y) || (enimy.x - 1 == fireBall.x && fireBall.y >= enimy.y)) {
                        enimy.y = enimy.y + 1;
                        return;
                    }
                    //Down Left
                    if (player.x < enimy.x && enimy.x - 1 >= 0) {
                        if ((enimy.y - 1 == fireBall.y && fireBall.x <= enimy.x) || (enimy.y + 1 == fireBall.y && fireBall.x <= enimy.x)) {
                            enimy.x = enimy.x - 1;
                            return;
                        }
                        enimy.x = enimy.x - 1;
                        enimy.y = enimy.y + 1;
                        return
                    }
                    //Down Right
                    if (player.x > enimy.x && enimy.x + 1 < screen.width) {
                        if ((enimy.y - 1 == fireBall.y && fireBall.x >= enimy.x) || (enimy.y + 1 == fireBall.y && fireBall.x >= enimy.x)) {
                            enimy.x = enimy.x + 1;
                            return;
                        }
                        enimy.x = enimy.x + 1;
                        enimy.y = enimy.y + 1;
                        return
                    }
                    //dudge
                    if (fireBall.x == enimy.x && ireBall.y >= enimy.y) {
                        enimy.x = enimy.x - 1;
                        enimy.y = enimy.y + 1;
                        return;
                    }
                    //Down
                    enimy.y = enimy.y + 1;
                    return
                }
                //left
                if (player.x < enimy.x && enimy.x - 1 >= 0) {
                    //avoid
                    if ((enimy.y - 1 == fireBall.y && fireBall.x <= enimy.x) || (enimy.y + 1 == fireBall.y && fireBall.x <= enimy.x)) {
                        enimy.x = enimy.x - 1;
                        return;
                    }
                    //left Down
                    if (player.y > enimy.y && enimy.y + 1 < screen.height) {
                        enimy.y = enimy.y + 1;
                        enimy.x = enimy.x - 1;
                        return
                    }
                    //left Up
                    if (player.y < enimy.y && enimy.y - 1 >= 0) {
                        enimy.y = enimy.y - 1;
                        enimy.x = enimy.x - 1;
                        return
                    }
                    //dudge
                    if (fireBall.y == enimy.y && fireBall.x <= enimy.x) {
                        enimy.y = enimy.y + 1;
                        enimy.x = enimy.x - 1;
                        return;
                    }
                    //Left
                    enimy.x = enimy.x - 1;
                    return
                }
                //Right
                if (player.x > enimy.x && enimy.x + 1 < screen.width) {
                    //avoid
                    if ((enimy.y - 1 == fireBall.y && fireBall.x >= enimy.x) || (enimy.y + 1 == fireBall.y && fireBall.x >= enimy.x)) {
                        enimy.x = enimy.x + 1;
                        return;
                    }
                    //Right Down
                    if (player.y > enimy.y && enimy.y + 1 < screen.height) {
                        enimy.y = enimy.y + 1;
                        enimy.x = enimy.x + 1;
                        return
                    }
                    //Rifght Up
                    if (player.y < enimy.y && enimy.y - 1 >= 0) {
                        enimy.y = enimy.y - 1;
                        enimy.x = enimy.x + 1;
                        return
                    }
                    //dudge
                    if (fireBall.y == enimy.y && fireBall.x >= enimy.x) {
                        enimy.y = enimy.y + 1;
                        enimy.x = enimy.x + 1;
                        return;
                    }
                    //Rifht
                    enimy.x = enimy.x + 1;
                    return
                }
            }
        }
    }
}

renderScreen()
var firsttime = true;
var P1Shoot = true;
var point = 0;
var point2 = 0;
var txt1 = "Your score is: ";
var txt2 = "";
var color = "#0000ff";
var color2 = '#ff0000';
function renderScreen() {

    w = window.innerWidth;
    h = window.innerHeight;

    //clear white screen (no double items)
    context.fillStyle = 'white';
    context.clearRect(0, 0, 20, 20);

    //players
    const player = game.players["player1"];
    context.globalAlpha = 0.7;
    context.fillStyle = color;
    context.fillRect(player.x, player.y, 1, 1);

        const player2 = game.players["player2"];
        context.globalAlpha = 0.7;
        context.fillStyle = color2;
        context.fillRect(player2.x, player2.y, 1, 1);
    
    //fruits
    for (const FruitID in game.fruits) {
        const fruit = game.fruits[FruitID];
        context.globalAlpha = 1;
        context.fillStyle = 'lime';
        context.fillRect(fruit.x, fruit.y, 1, 1);

        if (game.players['player1'].x == fruit.x && game.players['player1'].y == fruit.y) {

            context.fillStyle = 'white';
            context.clearRect(fruit.x, fruit.y, 1, 1);
            fruit.x = -1;
            fruit.y = -1;
            delete fruit;

            point++;

        }
        
            if (game.players['player2'].x == fruit.x && game.players['player2'].y == fruit.y) {

                context.fillStyle = 'white';
                context.clearRect(fruit.x, fruit.y, 1, 1);
                fruit.x = -1;
                fruit.y = -1;
                delete fruit;

                point2++;
            }
        
        document.getElementById("points").innerHTML = txt1 + point;
        if (game.players["player2"] && game.players["player2"].x <= 100) {
            document.getElementById("points2").innerHTML = txt2 + point2;
        }
    }

    //enimy
    const enimy = game.enimies['enimy1'];
    context.globalAlpha = .9;
    context.fillStyle = '#660000';
    context.fillRect(enimy.x, enimy.y, 1, 1);

    if (game.players['player1'].x == enimy.x && game.players['player1'].y == enimy.y) {

        if (mode) {
            if (color === '#00ffff') {

                clearTimeout(myEnimy)

                myStop = setTimeout(activateEnimy, 3000);
            }
            //die
            else {
                color = "#0000ff";
                point = point - 5;
                game.players['player1'] = { x: 101, y: 73 };

                if(point < 0)
                {
                    StopAll();
                    document.getElementById("pausedH1").innerHTML = "red Player Won!!!";
                    document.getElementById("BntResume").style.display = "none";
                    document.getElementById("Pause").style.backgroundColor = "#ffffff";
                    document.getElementById("BntStart").style.backgroundColor = "#bf5050";
                    document.getElementById("btnBack").style.backgroundColor = "#bf5050";
                    document.getElementById("Pause").style.boxShadow = " -3px 0px 30px 0px #bf5050 inset, 3px 0px 30px 0px #bf5050 inset, 0px -3px 30px 0px #bf5050 inset, 0px 3px 30px 0px #bf5050 inset";
                    document.getElementById("pausedH1").style.textShadow = " 0px -1px 3px #bf5050, 0px 1px 3px #bf5050,-1px 0px 3px #bf5050, 1px 0px 3px #bf5050,-6px 0px 10px #bf5050, 6px 0px 10px #bf5050, 0px -6px 10px #bf5050, 0px 6px 10px #bf5050";
                    document.getElementById("BntStop").disabled  = true;
                }
                else{
                    myReplace1 = setTimeout(replacePlayer1, 5000);
                }
            }
        }
        
        else {
            if (color === '#00ffff') {

                clearTimeout(myEnimy)

                myStop = setTimeout(activateEnimy, 3000);
            }
            //die
            if (color === '#0000ff' || color === '#ffff00') {

                var H_Socre = getHighestScore();
                if(H_Socre < point)
                {
                    SaveHighestScore(point);
                    document.getElementById("points2").style.display = "block";
                    document.getElementById("points2").style.color = "white";
                    var H_Socre2 = getHighestScore();
                    document.getElementById("points2").innerHTML= "The highest Score is: " + H_Socre2;
                }

                game.players["player1"] = { x: 1, y: 1 }

               
                //alert("Game Over!!");
                
                clearTimeout(myEnimy)
                clearTimeout(myFruit)
                clearTimeout(mySkill)
                clearInterval(mySkill)
                document.getElementById("Pause").style.display = "block";

                game.enimies['enimy1'] = { x: 102, y: -73 }

                document.getElementById("pausedH1").innerHTML = "Game Over";
                document.getElementById("BntResume").style.display = "none";
                document.getElementById("Pause").style.backgroundColor = "#ffffff";
                document.getElementById("BntStart").style.backgroundColor = "#bf5050";
                document.getElementById("btnBack").style.backgroundColor = "#bf5050";
                document.getElementById("BntStop").style.backgroundColor = "#bf5050";
                document.getElementById("body").style.backgroundColor = "#bf5050";
                document.getElementById("Pause").style.boxShadow = " -3px 0px 30px 0px #bf5050 inset, 3px 0px 30px 0px #bf5050 inset, 0px -3px 30px 0px #bf5050 inset, 0px 3px 30px 0px #bf5050 inset";
                document.getElementById("pausedH1").style.textShadow = " 0px -1px 3px #bf5050, 0px 1px 3px #bf5050,-1px 0px 3px #bf5050, 1px 0px 3px #bf5050,-6px 0px 10px #bf5050, 6px 0px 10px #bf5050, 0px -6px 10px #bf5050, 0px 6px 10px #bf5050";
                document.getElementById("BntStop").disabled  = true;


                for (const FruitID in game.fruits) {
                    const fruit = game.fruits[FruitID];
                    context.fillStyle = 'white';
                    context.clearRect(fruit.x, fruit.y, 1, 1);
                    fruit.x = -1;
                    fruit.y = -1;
                    delete fruit;
                }
                for (const skillID in game.skills) {
                    const skill = game.skills[skillID];
                    skill.x = -1;
                    skill.y = -1;
                }
                playing = false;
                started = false;
                firsttime = true;
                point = 0;
            }
        }
    }
    if (game.players['player2'].x == enimy.x && game.players['player2'].y == enimy.y) {
        if (color2 === '#00ffff') {

            clearTimeout(myEnimy)
            
            myStop = setTimeout(activateEnimy, 3000);
        }
        else if (color2 === '#ff0000' || color2 === '#ffff00') {
            color2 = '#ff0000';
            game.players["player2"] = { x: 100, y: 1 }
            
            point2 = point2 - 5;

            if(point2 < 0)
            {
                StopAll();
                document.getElementById("pausedH1").innerHTML = "Blue Player Won!!!";
                document.getElementById("BntResume").style.display = "none";
                document.getElementById("Pause").style.backgroundColor = "#ffffff";
                document.getElementById("BntStart").style.backgroundColor = "#2196f3";
                document.getElementById("btnBack").style.backgroundColor = "#2196f3";
                document.getElementById("Pause").style.boxShadow = " -3px 0px 30px 0px #1238b8 inset, 3px 0px 30px 0px #1238b8 inset, 0px -3px 30px 0px #1238b8 inset, 0px 3px 30px 0px #1238b8 inset";
                document.getElementById("pausedH1").style.textShadow = " 0px -1px 3px #1238b8, 0px 1px 3px #1238b8,-1px 0px 3px #1238b8, 1px 0px 3px #1238b8,-6px 0px 10px #1238b8, 6px 0px 10px #1238b8, 0px -6px 10px #1238b8, 0px 6px 10px #1238b8";
                document.getElementById("BntStop").disabled  = true;
            }
            else{
                myReplace2 = setTimeout(replacePlayer2, 5000);
            }
        }
    }

    //Skills
    const shield = game.skills['shield'];
    context.globalAlpha = .9;
    context.fillStyle = '#00ffff';
    context.fillRect(shield.x, shield.y, 1, 1);

    if (game.players['player1'].x == shield.x && game.players['player1'].y == shield.y) {

        color = '#00ffff';
        clearTimeout(myClearPLayer)
        clearInterval(myClearPLayer)
        myClearPLayer = setTimeout(clearPlayer1, 3000);

        context.fillStyle = 'white';
        context.clearRect(shield.x, shield.y, 1, 1);
        shield.x = -1;
        shield.y = -1;
    }
    if (game.players['player2'].x == shield.x && game.players['player2'].y == shield.y) {

        color2 = '#00ffff';
        clearTimeout(myClearPLayer2)
        clearInterval(myClearPLayer2)
        myClearPLayer2 = setTimeout(clearPlayer2, 3000);

        context.fillStyle = 'white';
        context.clearRect(shield.x, shield.y, 1, 1);
        shield.x = -1;
        shield.y = -1;
    }
    const gun = game.skills['gun'];
    context.globalAlpha = .9;
    context.fillStyle = '#ffff00';
    context.fillRect(gun.x, gun.y, 1, 1);

    if (game.players['player1'].x == gun.x && game.players['player1'].y == gun.y) {
        context.fillStyle = 'white';
        context.clearRect(gun.x, gun.y, 1, 1);
        gun.x = -1;
        gun.y = -1;

        P1Shoot = true;
        color = '#ffff00';

        clearTimeout(myClearPLayer)
        clearInterval(myClearPLayer)
        myClearPLayer = setTimeout(clearPlayer1, 10000);
    }

    if (game.players['player2'].x == gun.x && game.players['player2'].y == gun.y) {
        context.fillStyle = 'white';
        context.clearRect(gun.x, gun.y, 1, 1);
        gun.x = -1;
        gun.y = -1;

        P1Shoot = false;
        color2 = '#ffff00';

        clearTimeout(myClearPLayer2)
        clearInterval(myClearPLayer2)
        myClearPLayer2 = setTimeout(clearPlayer2, 10000);
    }

    const fireShoot = game.effect['fireShot'];
    context.globalAlpha = .9;
    context.fillStyle = 'yellow';
    context.fillRect(fireShoot.x, fireShoot.y, 1, 1);
    if (enimy.x == fireShoot.x && enimy.y == fireShoot.y) {
        enimy.x = 102;
        enimy.y = -73;
        setTimeout(addEnimy, 5000);
        if (P1Shoot) {
            point = point + 5;
        }
        else {
             point2 = point2 + 5;
        }
        resetEnemy = true;
    }
    if (player.x == fireShoot.x && player.y == fireShoot.y) {
        player.x = 101;
        player.y = -73;
        myReplace1 = setTimeout(replacePlayer1, 5000);
        point = point - 20;
        point2 = point2 + 10;
    }

    if (player2.x == fireShoot.x && player2.y == fireShoot.y) {
        player2.x = 100;
        player2.y = -73;
        myReplace2 = setTimeout(replacePlayer2, 5000);
        point = point + 10;
        point2 = point2 - 20;
    }

    //call the same function again (like a frame)
    requestAnimationFrame(renderScreen);
}