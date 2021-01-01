var ball;
var database;
var pos;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    console.log(database);
    var ballpos = database.ref('ball/position');
    ballpos.on("value",readposition,showError);
}

function draw(){
    background("white");
    if(pos !== undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
    }
    
    drawSprites();
}
function showError(){
    console.log("error");
}
function readposition(hello){
    pos = hello.val();
    ball.x = pos.x;
    ball.y = pos.y;
    console.log(pos.x)
}
function changePosition(x,y){
    database.ref('ball/position').set({
        'x': pos.x + x,
        'y': pos.y + y
    })
}
