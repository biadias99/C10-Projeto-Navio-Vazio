var sea, ship;
var seaImg, shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  /* Criar sprite
  Adicionar imagem
  Adicionar velocidade
  Diminuir tamanho */
  
  // Adicionar navio
  /* Criar sprite
  Adicionar imagem
  Scale */
}

function draw() {
  background(0);
  // Velocidade do plano de fundo
  sea.velocityX = -3;

  
  // código para redefinir o plano de fundo
  // dica: width
    
  drawSprites();
}
