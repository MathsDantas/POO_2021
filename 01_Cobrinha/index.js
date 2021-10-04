const NL = 8;
const NC = 8;

const lado = 50;
let snake_x = 0;
let snake_y = 0;
let snake_vx = 0;
let snake_vy = 0;
let snake_color;
let cell_color;
let timer = 0;

let food_x = 0;
let food_y = 0;
let food_color;
let food_count = 0;

function criar_comida(){
  food_x = parseInt(random(0, NC));
  food_y = parseInt(random(0, NL));
}

function setup() {
  createCanvas(NC * lado, NL * lado);
  frameRate(30);
  snake_color = color("rgb(0,135,147)");
  cell_color = color("gray");
  food_color = color("magenta")
  criar_comida();
}

function draw_cell(x, y, color){
  noStroke();
  fill(color);
  square( x * lado + 1, y * lado + 1, lado - 1)
}

function draw_mat() {
  fill(100);
  for (let c = 0; c < NC; c++)
    for (let l = 0; l < NL; l++)
      draw_cell(c, l, cell_color);
}

function sem_saida(){
  if(snake_x == NC)
    snake_x = 0;
  if(snake_y == NL)
    snake_y = 0;
  if(snake_x == -1)
    snake_x = NC - 1;
  if(snake_y == -1)
    snake_y = NL -1
}

function andar(){
  if(frameCount - timer > 10){
    timer = frameCount;
    snake_x += snake_vx;
    snake_y += snake_vy;
  }
}

function draw() {
  andar();
  sem_saida();
  if(snake_x == food_x && snake_y == food_y){
    criar_comida();
    food_count += 1;
  }
  background(255);
  draw_mat();
  draw_cell(food_x, food_y, food_color);
  draw_cell(snake_x, snake_y, snake_color);

  fill(0);
  textSize(20);
  text(food_count, 10, 30)
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    snake_vx = -1;
    snake_vy = 0;
  }else   if(keyCode === RIGHT_ARROW){
    snake_vx = 1;
    snake_vy = 0;
  }else   if(keyCode === UP_ARROW){
    snake_vx = 0;
    snake_vy = -1;
  }else   if(keyCode === DOWN_ARROW){
    snake_vx = 0;
    snake_vy = 1;
  }
}