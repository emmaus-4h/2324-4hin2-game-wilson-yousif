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
let bg;
let y = 0;
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
var springsnelheid = 2;
var springsnelheidstart = 4;
var zwaartekracht = 0.5;

var health = 100;  // health van speler

var kogelX = spelerX;
var kogelY = spelerY;
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

  // kogel
  loop()
  if (kogelVliegt === false && keyIsDown(74)) {
    kogelVliegt = true
    kogelX=spelerX;
    kogelY = spelerY;
  }
  if (kogelVliegt === true){
kogelX = kogelX - 5;
  }
if (kogelVliegt === true && 
    kogelY < 10){
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
