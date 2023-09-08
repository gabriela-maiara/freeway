//variáveis do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 2;
    }
  }
}

function verificaColisao(){
  //colidirRectCircle(x1, y1, largura1, altura1, cx, cy, diâmetro)
  for (let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
  if (colisao){
      voltaAtorParaPosicaoInicial();
    somColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255, 240, 80);
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    somPonto.play();
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}