const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight - (2*canvas.offsetTop);
canvas.width = window.innerWidth - (2 * canvas.offsetLeft);
var dx = 4;
var dy = 30;
var cx = (this.canvas.width / 2) - 2;
var cy = (this.canvas.height / 2) - 10;
var barWidth = 20;
var barHeight = 75;
var ballSpeed = 1;
var leftPadPosition={x:5,y:this.padsInitialY};
var rightPadPosition={x:this.canvas.width - 25,y:this.padsInitialY};
var lastGoalby = 'right';
function Ball(x, y) {
    ctx.clearRect(
        5 + this.barWidth,
        0,
        (this.canvas.width / 2) - 2 - (this.barWidth + 5), this.canvas.height
    );
    ctx.clearRect(
        (this.canvas.width / 2),
        0,
        (this.canvas.width / 2) - 25, this.canvas.height
    );
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    this.cx=x;
    this.cy=y;
}



var padsInitialY = (this.canvas.height / 2) - (this.barHeight / 2);
this.setUpCanvas();


this.Ball((this.canvas.width / 2) - 2, (this.canvas.height / 2) - 10);

window.addEventListener('resize', function () {
    canvas.height = window.innerHeight - (2 * canvas.offsetTop);
    canvas.width = window.innerWidth - (2 * canvas.offsetLeft);
    this.reset();
})

window.addEventListener('keydown', (e) => {
    if (e.key == 's' || e.key == 'w') {
        this.player1KeyPress(e);
    } else if (e.key == 'ArrowUp' || e.key == 'ArrowDown') {
        this.player2KeyPress(e);
    }else if (e.key==' '){
        this.startGame();
    }else if (e.key=='r'){
        this.reset();
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key == 's' || e.key == 'w') {
        this.player1KeyPress(e);
    } else if (e.key == 'ArrowUp' || e.key == 'ArrowDown') {
        this.player2KeyPress(e);
    }
});


function setUpCanvas() {
    ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    ctx.fillStyle = 'rgba(255,0,0,1)';
    //left pad
    ctx.fillRect(5,
        (this.canvas.height / 2) - (this.barHeight / 2),
        this.barWidth, this.barHeight
    );
    ctx.fillStyle = '#ffffff';
    ctx.fillRect((this.canvas.width / 2) - 2, 0, 2, this.canvas.height);
    ctx.fillStyle = 'rgba(0,0,255,1)';
    //right pad
    ctx.fillRect(this.canvas.width - 25,
        (this.canvas.height / 2) - (this.barHeight / 2),
        this.barWidth, this.barHeight
    );
    this.Ball((this.canvas.width / 2) - 2, (this.canvas.height / 2) - 10);
}

function player1KeyPress(e) {
    if (e.key == 'w') {
        if (this.padsInitialY > 0) {
            ctx.fillStyle = 'rgba(255,0,0,1)';
            this.padsInitialY = this.padsInitialY - this.dy;
            ctx.clearRect(5, 0, this.barWidth, this.canvas.height);
            ctx.fillRect(5,
                this.padsInitialY,
                this.barWidth, this.barHeight
            );
            this.leftPadPosition.y=this.padsInitialY;
        }
    } else if (e.key == 's') {
        if ((this.padsInitialY + this.barHeight) < this.canvas.height) {
            ctx.fillStyle = 'rgba(255,0,0,1)';
            this.padsInitialY = this.padsInitialY + this.dy;
            ctx.clearRect(5, 0, this.barWidth, this.canvas.height);
            ctx.fillRect(5,
                this.padsInitialY,
                this.barWidth, this.barHeight
            );
            this.leftPadPosition.y=this.padsInitialY;
        }
    }
}

function player2KeyPress(e) {
    if (e.key == 'ArrowUp') {
        if (this.padsInitialY > 0) {
            ctx.fillStyle = 'rgba(0,0,255,1)';
            this.padsInitialY = this.padsInitialY - this.dy;
            ctx.clearRect(this.canvas.width - 25, 0, this.barWidth, this.canvas.height);
            ctx.fillRect(this.canvas.width - 25,
                this.padsInitialY,
                this.barWidth, this.barHeight
            );
            this.rightPadPosition.y=this.padsInitialY;
        }
    } else if (e.key == 'ArrowDown') {
        if ((this.padsInitialY + this.barHeight) < this.canvas.height) {
            ctx.fillStyle = 'rgba(0,0,255,1)';
            this.padsInitialY = this.padsInitialY + this.dy;
            ctx.clearRect(this.canvas.width - 25, 0, this.barHeight / 2, this.canvas.height);
            ctx.fillRect(this.canvas.width - 25,
                this.padsInitialY,
                this.barWidth, this.barHeight
            );
            this.rightPadPosition.y=this.padsInitialY;
        }
    }
}

var xUyU = false;
var xUyD = false;
var xDyD = false;
var xDyU = false;

var ballDirections=[{xUyU:true},{xUyD:false},{xDyD:false},{xDyU:false}];

function setBallDirection(dir) {
    this.xUyU = false;
    this.xUyD = false;
    this.xDyD = false;
    this.xDyU = false;
    for (let i=0; i<this.ballDirections.length;i++){
       if (Object.keys(this.ballDirections[i])[0]==dir){
        this.ballDirections[i][dir]=true;
       }else {
        this.ballDirections[i][Object.keys(this.ballDirections[i])[0]]=false;
       }
    }
    if (dir == 'xUyU') {
        this.xUyU = true;
        this.cx += 1;
        this.cy += 1;
    } else if (dir == 'xUyD') {
        this.xUyD = true;
        this.cx += 1;
        this.cy -= 1;
    } else if (dir == 'xDyD') {
        this.xDyD = true;
        this.cx -= 1;
        this.cy -= 1;
    } else if (dir == 'xDyU') {
        this.xDyU = true;
        this.cx -= 1;
        this.cy += 1;
    }
    this.Ball(this.cx, this.cy);
}

function moveBall(){
    let dir = this.ballDirections.find(d=>d[Object.keys(d)[0].toString()]==true);
    dir =Object.keys(dir)[0];
    this.setBallDirection(dir);
}

var gameStarted=false;

function startGame() {
    const startBtn=document.getElementById('startBtn');
    startBtn.disabled = true;
    this.gameStarted=true;
    this.lastGoalby=='right'?this.xUyU = true:this.xDyU=true;
        this.intervalId=setInterval(() => {
            if(cx>0 && cy>0 && cx<this.canvas.width && cy<this.canvas.height){
                this.moveBall();
            }
            if (cx + 10 >= this.canvas.width) {
                this.writeScore('left');
                this.setUpCanvas();
            }
            if (cy <= 0) {
                if (this.xDyD) {
                    this.setBallDirection('xDyU');
                } else if (this.xUyD) {
                    this.setBallDirection('xUyU');
                }
            }
            if (cy + 20 >= this.canvas.height) {
                if (this.xUyU) {
                    this.setBallDirection('xUyD');
                } else if (this.xDyU) {
                    this.setBallDirection('xDyD');
                }
    
            }
            if (cx <= 0) {
                this.writeScore('right');
                this.setUpCanvas();
            }
            if(cx<=15+this.barWidth && cy>=this.leftPadPosition.y && cy<=this.barHeight+this.leftPadPosition.y){
                if (this.xDyU) {
                    this.setBallDirection('xUyU');
                } else if (this.xDyD) {
                    this.setBallDirection('xUyD');
                }
            }
            if(cx + 10 >= this.canvas.width-this.barWidth-5 && cy>=this.rightPadPosition.y && cy<=this.rightPadPosition.y+this.barHeight){
                if (this.xUyU) {
                    this.setBallDirection('xDyU');
                } else if (this.xUyD) {
                    this.setBallDirection('xDyD');
                }
            }
            
        }, 1)
    
}

var scoreCount={left:0,right:0};

function writeScore(scorer){
    const scoreCard = document.getElementById('scorecount');
    const startBtn=document.getElementById('startBtn');
    startBtn.disabled = false;
    if(scorer=='left'){
        this.lastGoalby =scorer;
        this.scoreCount.left+=1;
        scoreCard.innerHTML=this.scoreCount.left+':'+this.scoreCount.right;
    }else{
        this.lastGoalby =scorer;
        this.scoreCount.right+=1;
        scoreCard.innerHTML=this.scoreCount.left+':'+this.scoreCount.right;
    }
    this.gameStarted=false;
    clearInterval(this.intervalId);
}
function reset() {
    const startBtn=document.getElementById('startBtn');
    startBtn.disabled = false;
    this.gameStarted=false;
    this.setUpCanvas();
    clearInterval(this.intervalId);
    const scoreCard = document.getElementById('scorecount');
    scoreCard.innerHTML="00:00";
}

function showControls(){
    let msg=`
        1. Space button will start the game.
        2. 'r' button will reset the game.
        3. 'w' and 's' will move left pad upward and downward respectively.
        4. Arrow up and Arrow down will move right pad upward and   downward respectively.
    `
    alert(msg);
}
