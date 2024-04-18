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
"use strict"
const KEY_SPACE = 32;

var aantal = 0;
/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var floorY = 650;

var spelerX = 600; // x-positie van speler
var spelerY = floorY; // y-positie van speler
var spelerspringt = false;
var vijand=600;
var vijandY=floorY;
var springsnelheid = 2;
var springsnelheidstart = 4;
var zwaartekracht = 0.5;

var health = 100;  // health van speler

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
  vijand = vijand - 1;
  //if (vijand < 0) spelerX=0;
 vijandY = floorY;


  // kogel
  
  if (kogelVliegt === false && keyIsDown(74)) {
    kogelVliegt = true
    kogelX= spelerX;
    kogelY = spelerY;
  }
  if (kogelVliegt === true ){
kogelX = kogelX - 5;
  }
  
if (kogelVliegt === true && 
    kogelY < 0){
  kogelVliegt = false;
    }

 

  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  
  // botsing speler tegen vijand
  //if (vijand < spelerX && vijand + 50 > spelerX && vijandY < spelerY && vijandY + 50 > spelerY);

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  
  //achtergrond
  background(bg);
  
  // vijand
  fill("red");
  rect(vijand, vijandY, 50, 50);
  vijand = vijand - 1;
  if (vijand < 0)
    

  // kogel
  fill ("yellow");
  ellipse (kogelX,kogelY,20,20);


  

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health

};

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
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
  }
  
}
