import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 4, y: 0},
    {x: 3, y: 0},
    {x: 2, y: 0},
    {x: 1, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};


this.direction = "right";

}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  // 
  // this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y -1 });


this.direction ='up'
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
 
// this.joints.pop ();
// this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });

 this.direction= 'down'




  console.log('down'); 
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수

  


this.direction = "left";
// 
// this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });


  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수\

  

this.direction = "right";
// 
// this.joints.unshift({x: this. joints[0].x+1, y:this.joints[0].y});

  
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {

// 자동 이동 로직

if(this.direction ==='up'){

this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 });

}

if(this.direction ==='down'){


this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });


}

if(this.direction === 'left'){

this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });

}

if(this.direction === 'right'){

  
  this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
}

// 벽 부딪치면 사망 로직

if (
  this.joints[0].x > COLS-1||
  this.joints[0].y > ROWS-1 ||
  this.joints[0].x < 0 ||
  this.joints[0].y < 0
) {
  
this.joints.pop();

  return false;
}


// 꼬리 늘어나가 하는 ,,,

if(this.joints[0].x === this.fruit.x && this.joints[0].y ===  this.fruit.y ){
  this.fruit.x = Math.ceil(Math.random() * COLS-1);
  this.fruit.y = Math.ceil(Math.random() * ROWS-1);
} else {
    this.joints.pop();
   }

for(let i  =  1; i < this.joints.length; i++){
if(this.joints[0].x === this.joints[i].x && this.joints[0].y === this.joints[i].y) {

  return false
}


}



   
  
  
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
    // 게임이 아직 끝나지 않았으면 `true`를 반환
    // 게임이 끝났으면 `false`를 반환
    console.log(`nextState`);
 





 
  return true;



}

  

export default SnakeGameLogic;





