
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

"use strict"


var tank; // plaatje speler
var bg; // achtergrond;
var blue; // plaatje vijand non-killable
var slecht; // plaatje vijand killable
const KEY_SPACE = 32; //spatie
const KEY_ENTER = 13; // enter
var size; // grootte 


var aantal = 0;
var score = 0;
var highscore = 0;
var x = 0;
var y = 0;
var checkGameOver = 0;


//vijand tekenen
var drawAnemy = true;
var drawAnemy2 = true;
var drawAnemy3 = true;
var drawAnemy4 = true;






/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;

const GAMEOVER = 2;

const UITLEG = 3;

var spelStatus = UITLEG;




//vijand1
var vijandSpeed = 10;
var VijandLeven = true;
var vijandY = 640;
var vijandX = 1400;
var vijandSpawn = vijandX;


//vijand2
var vijand2Speed = 7;
var vijand2Leven = true;
var vijand2Y = 640;
var vijand2X = 1600;
var vijand2Spawn = vijand2X;


//vijand3
var vijand3leven = true;
var vijand3Speed = 13;
var vijand3Y = 640;
var vijand3X = 1700;
var vijand3Spawn = vijand3X;


//vijand4 
var vijand4Speed = 9;
var vijand4Leven = true;
var vijand4Y = 640;
var vijand4X = 1800;
var vijand4Spawn = vijand4X;


//vloer
var floorY = 660;

//speler
var spelerX = 600; // x-positie van speler
var spelerY = 660; // y-positie van speler
var spelerSpringt = false;
var springSnelheid = 0;
var springSnelheidStart = 6;
var zwaartekracht = 0.2;



//kogel
var kogelPlek = kogelX && kogelY;
var kogelX = 10000;
var kogelY = 10000;
var kogelVliegt = false;
var kogelSpeed = 10;





/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
function preload() {
  tank = loadImage("tank.png");
  blue = loadImage("blue.png");
  slecht = loadImage("slecht.png");
  bg = loadImage("City2_pale.png");
}




//beweging
var beweegAlles = function() {

  
  // speler
  if (keyIsDown(68)) {
    spelerX = spelerX + 3;
  }

  
  if (keyIsDown(65)) {
    spelerX = spelerX - 3;

  }
  

  if (spelerSpringt === false && keyIsDown(KEY_SPACE)) {
    spelerSpringt = true;
    springSnelheid = springSnelheidStart;
  }

  
  if (spelerSpringt === true) {
    spelerY = spelerY - springSnelheid;
    springSnelheid = springSnelheid - zwaartekracht;
  }

  
  if (spelerY > floorY) {
    spelerSpringt = false;
  }


  
  // vijand
  if (VijandLeven === true && vijandX < -100) {
    VijandLeven = false;
  }

  
  if (VijandLeven === false && vijandX < -100) {
    vijandX = 1400;
    aantal = aantal - 1;
  }

  
  if (vijandX === 1400) {
    VijandLeven = true;
  }

  
  //vijand 2
  if (vijand2Leven === true && vijand2X < -100) {
    vijand2Leven = false;
  }


  if (vijand2Leven === false && vijand2X < -100) {
    vijand2X = 1600;
  }

  
  if (vijand2X === 1600) {
    vijand2Leven = true;
  }


  //vijand 3
  if (vijand3leven === true && vijand3X < -100) {
    vijand3leven = false;
  }

  
  if (vijand3leven === false && vijand3X < -100) {
    vijand3X = 1400;
    aantal = aantal - 1;
  }

  
  if (vijand3X === 1900) {
    vijand3leven = true;
  }

  
  //vijand 4
  if (vijand4Leven === true && vijand4X < 0) {
    vijand4Leven = false;
  }


  if (vijand4Leven === false && vijand4X < 0) {
    vijand4X = 1800;
  }

  
  if (vijand4X === 1800) {
    vijand4Leven = true;
  }


  
  // kogel
  if (kogelVliegt === false && keyIsDown(74)) {
    kogelVliegt = true
    kogelX = spelerX;
    kogelY = spelerY;
  }

  
  if (kogelVliegt === true) {
    kogelX = kogelX + kogelSpeed;
  }

  
  if (kogelVliegt === true &&
    kogelX > 1400) {
    kogelVliegt = false;
  }

  
//vijand 1
  if (kogelVliegt === true &&
    vijandX - kogelX < 26 &&
    kogelX - vijandX < 26 &&
    vijandY - kogelY < 26 &&
    kogelY - vijandY < 26) {
    VijandLeven = false;
    kogelVliegt = false;
    aantal = aantal + 1;
    console.log("score = " + aantal)
  }

  
  //vijand 2
  if (kogelVliegt === true &&
    vijand2X - kogelX < 26 &&
    kogelX - vijand2X < 26 &&
    vijand2Y - kogelY < 26 &&
    kogelY - vijand2Y < 26) {
    kogelVliegt = false;
    aantal = aantal - 1;
    console.log("score = " + aantal)
  }

  
//vijand 3
  if (kogelVliegt === true &&
    vijand3X - kogelX < 26 &&
    kogelX - vijand3X < 26 &&
    vijand3Y - kogelY < 26 &&
    kogelY - vijand3Y < 26) {
    kogelVliegt = false;
    vijand3leven = false;
    aantal = aantal + 1;
    console.log("score = " + aantal)
  }

  
//vijand 4
  if (kogelVliegt === true &&
    vijand4X - kogelX < 26 &&
    kogelX - vijand4X < 26 &&
    vijand4Y - kogelY < 26 &&
    kogelY - vijand4Y < 26) {
    kogelVliegt = false;
    aantal = aantal - 1;
    console.log("score = " + aantal)
  }

  
  //positie
  if (kogelVliegt === false) {
    kogelX = kogelPlek;
  }

  
//vijand 1
  if (VijandLeven === false) {
    vijandX = 1400;
    VijandLeven = true;
  }

  
  //vijand 3
  if (vijand3leven === false) {
    vijand3X = 1700;
    vijand3leven = true;
  }

  

};



/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */

var verwerkBotsing = function() {

  //botsing speler tegen vijand
  if (spelerX - vijandX < 26 &&
    vijandX - spelerX < 26 &&
    spelerY - vijandY < 26 &&
    vijandY - spelerY < 26) {
    console.log("botsing" + aantal)
  }

  
  //botsing speler tegen vijand 2
  if (spelerX - vijand2X < 26 &&
    vijand2X - spelerX < 26 &&
    spelerY - vijand2Y < 26 &&
    vijand2Y - spelerY < 26) {
    aantal = aantal - 1;
    console.log("botsing" + aantal)
  }
  

  //botsing speler tegen vijand 3
  if (spelerX - vijand3X < 26 &&
    vijand3X - spelerX < 26 &&
    spelerY - vijand3Y < 26 &&
    vijand3Y - spelerY < 26) {
    console.log("botsing" + aantal)
  }

  
  // botsing speler tegen vijand 4
  if (spelerX - vijand4X < 26 &&
    vijand4X - spelerX < 26 &&
    spelerY - vijand4Y < 26 &&
    vijand4Y - spelerY < 26) {
    aantal = aantal - 1;
    console.log("botsing" + aantal)
  }


  
  //botsing tussen kogel en vijand
  if (kogelX - vijandX < 26 &&
    vijandX - kogelX < 26 &&
    kogelY - vijandY < 26 &&
    vijandY - kogelY < 26) {
    kogelVliegt = false;
    VijandLeven = false;
    aantal = aantal + 1;
    console.log("score = " + aantal)
    console.log("botsing = " + aantal)
    drawAnemy = false;
  }

  
  //botsing tussen kogel en vijand 2
  if (kogelX - vijand2X < 26 &&
    vijand2X - kogelX < 26 &&
    kogelY - vijand2Y < 26 &&
    vijand2Y - kogelY < 26) {
    kogelVliegt = false;
    aantal = aantal - 1;
    drawAnemy2 = false;
  }

  
  //botsing tussen kogel en vijand 3
  if (kogelX - vijand3X < 26 &&
    vijand3X - kogelX < 26 &&
    kogelY - vijand3Y < 26 &&
    vijand3Y - kogelY < 26) {
    kogelVliegt = false;
    vijand3leven = false;
    aantal = aantal + 1;
    console.log("score = " + aantal)
    console.log("botsing = " + aantal)
    drawAnemy3 = false;
  }

  //botsing tussen kogel en vijand 4
  if (kogelX - vijand4X < 26 &&
    vijand4X - kogelX < 26 &&
    kogelY - vijand4Y < 26 &&
    vijand4Y - kogelY < 26) {
    kogelVliegt = false;
    aantal = aantal - 1;
    drawAnemy4 = false;
  }



};



/**
 * Tekent spelscherm
 */
var tekenAlles = function() {

  //achtergrond
  background(bg);
  fill("red");
  ellipse(690, 85, 300, 100);
  fill("yellow");
  text("score = " + aantal, 575, 100);

  

//vijand plaatje

  // vijand
  if (drawAnemy === true) {
    image(slecht, vijandX - 25, vijandY - 25);
    slecht.resize(200, 0);
    vijandX = vijandX - vijandSpeed;
  }

  //vijand 2
  if (drawAnemy2 === true) {
    image(blue, vijand2X - 25, vijand2Y - 25);
    blue.resize(180, 0);
    vijand2X = vijand2X - vijand2Speed;
  }
  
  //vijand 3
  if (drawAnemy3 === true) {
    image(slecht, vijand3X - 25, vijand3Y - 25);
    slecht.resize(200, 0);
    vijand3X = vijand3X - vijand3Speed;
  }
  

  //vijand 4
  if (drawAnemy4 === true) {
    image(blue, vijand4X - 25, vijand4Y - 25);
    blue.resize(180, 0);
    vijand4X = vijand4X - vijand4Speed;
  }




  // kogel
  fill("yellow");
  ellipse(kogelX, kogelY, 20, 20);



  // speler plaatje
  image(tank, spelerX - 25, spelerY - 25,)
  tank.resize(150, 0);

  
  return false;


};



var checkGameOver = function() {
  
//vijand
  if (spelerX - vijandX < 52 &&
    vijandX - spelerX < 26 &&
    spelerY - vijandY < 52 &&
    vijandY - spelerY < 26) {
    return true;
  }

  
  //vijand 2
  if (spelerX - vijand2X < 52 &&
    vijand2X - spelerX < 26 &&
    spelerY - vijand2Y < 52 &&
    vijand2Y - spelerY < 26) {
    return true;
  }

  
  //vijand 3
  if (spelerX - vijand3X < 52 &&
    vijand3X - spelerX < 26 &&
    spelerY - vijand3Y < 52 &&
    vijand3Y - spelerY < 26) {
    return true;
  }

  
  //vijand 4
  if (spelerX - vijand4X < 52 &&
    vijand4X - spelerX < 26 &&
    spelerY - vijand4Y < 52 &&
    vijand4Y - spelerY < 26) {
    return true;
  }

  
//highscore
  if (aantal > highscore) {
    highscore = aantal;
  }
  
    
  return false;


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
  
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);


}




/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();

    
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    
    console.log("spelen");
  }

  
  if (spelStatus === GAMEOVER) {

    background(bg);

    // teken game-over scherm
    console.log("game over");
    textSize(100);
    fill("white"); 
    text(" GAME OVER ", 350, 150);
    textSize(50);
    fill("white");
    text(" Score =", 500, 400);
    text(aantal, 725, 400)
    text("highscore = ", 500, 500)
    text(highscore, 825, 500)
    text("Uitleg = P", 550, 600)

    //spawn
    if (keyIsDown(80)) { //p
      spelerX = 600;
      vijandX = vijandSpawn;
      vijand2X = vijand2Spawn;
      vijand3X = vijand3Spawn;
      vijand4X = vijand4Spawn;
      kogelVliegt = false;
      aantal = 0;
      spelStatus = UITLEG;
    }

    
  }

  
  if (spelStatus === UITLEG) {
    // teken UITLEG SCHERM scherm
    console.log("uitleg");
    textSize(50);
    background (bg);
    fill("white");
    text("Schiet de tanks. GEEN auto's", 325, 150);
    text("Start = Enter", 550, 250)
    text("controls: ", 550, 400)
    text(" A & D = bewegen ", 450, 500)
    text("Spatie = jump     J = shoot", 400, 600)
    
    
    if (keyIsDown(13)) {
      spelerX = 600;
      vijandX = vijandSpawn;
      vijand2X = vijand2Spawn;
      vijand3X = vijand3Spawn;
      vijand4X = vijand4Spawn;
      spelStatus = SPELEN;
    }


  }

  
};