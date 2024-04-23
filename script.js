/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
///<reference path="p5.d.ts" />
var bg= 0;
var y = 0;
var c1=0;
var y=0;
"use strict"
const KEY_SPACE = 32;

var aantal = 0;
var score = 0;
var highscore = 0;
var x = 0;
var y = 0;
var checkGameOver = 0;


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;


const GAMEOVER = 2;


var spelStatus = SPELEN;
var UITLEG=0;




var floorY = 650;

var playerX = 50;
var playerY = 50;
var playerWidth = 40;
var playerHeight = 60;
var playerSpeed = 5;

var playerImg;


var vijandX = 20;
var vijandY = 70;
var vijandWidth = 40;
var vijandHeight = 60;
var vijandSpeed = 5;
var VijandLeven = true



var spelerX = 600; // x-positie van speler
var spelerY = floorY; // y-positie van speler
var spelerspringt = false;


var vijandY = floorY ;
var vijandX = 1400 ;


var vijandspringt=false;

var springsnelheid = 2;
var vijandsnelheid = 2;
var score = 0;
var springsnelheidstart = 4;
var zwaartekracht = 0.5;

var health = 100;  // health van speler
var vijandhealth = 10; // vijand health

var kogelX = 10000;
var kogelY = 10000;
var kogelVliegt = false;





  
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(68)){
spelerX = spelerX + 3;
  }
  
 if (keyIsDown(65)){
spelerX = spelerX - 3;
   
 }
  
if (keyIsDown(87)){
  spelerY = spelerY - 3;
  
}
  
if (keyIsDown(83)){
  spelerY = spelerY + 3;
}



  // vijand
if (vijandLeven === true && vijandX < 0){
  vijandLeven = false;

}
  

  
  

  // kogel
  
  if (kogelVliegt === false && keyIsDown(74)) {
    kogelVliegt = true
    kogelX= spelerX;
    kogelY = spelerY;
  }
  if (kogelVliegt === true ){
kogelX = kogelX - 10;
  }

if (kogelVliegt === true && 
    kogelX < 1300) {
  kogelVliegt = false;
    }

 

  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  
   //botsing speler tegen vijand
  if (spelerX - vijandX < 50 &&
     spelerX - vijandX >-50 &&
     spelerY - vijandY <50 &&
     spelerY - vijandY > -50) {
    health = health - 10;
    console.log("botsing"+ aantal)
    
  }
  
  

  // botsing kogel tegen vijand
if ( kogelX - vijandX < 50 &&
       kogelX -  vijandX > -50  &&
       kogelY - vijandY < 50 &&
       kogelY - vijandY > -50){
  vijandhealth = vijandhealth - 5;
       }

 

  
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  
  //achtergrond
  background(bg);
  
  // vijand
  fill("red");
  rect(vijandX,   vijandY, 50, 50);
  vijandX = vijandX - 2;
  if (vijandX < 0)

    
    
    

  // kogel
  fill ("yellow");
  ellipse (kogelX,kogelY,20,20);


  

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health

return false;
};
var checkGameOver= function(){

  if (spelerX - vijandX < 50 &&
     spelerX - vijandX >-50 &&
     spelerY - vijandY <50 &&
     spelerY - vijandY > -50) {
    health = health - 10;
    console.log("botsing"+ aantal)
    return true;
  }


  return false;
}

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
   bg = loadImage('City2_pale.png');
  
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);


  // Kleur de achtergrond blauw, zodat je het kunt zien
  // background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  //bg=loadImage('City2_pale.png');
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (health <= 0) {
      if (checkGameOver){
        spelStatus = GAMEOVER;
        
      }
      
      
    }
     console.log("spelen");
  }
  if (spelStatus === GAMEOVER) {
    
    // teken game-over scherm
    console.log("game over");
    textSize(50);
    fill("white");
    text("GAME OVER Play Again spatie", 500, 300);
    if(keyIsDown(32)){// spatiebalk}
      spelStatus=spelen;
    
  }
  if (spelStatus === UITLEG) {
    // teken UITLEG SCHERM scherm
     console.log("uitleg");

  }
  
}
