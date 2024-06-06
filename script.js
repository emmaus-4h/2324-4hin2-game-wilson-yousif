
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
var tank; // plaatje speler
var bg = 0;
var blue;
"use strict"
var slecht;
const KEY_SPACE = 32;
const KEY_ENTER = 13;



var aantal = 0;
var score = 0;
var highscore = 0;
var x = 0;
var y = 0;
var checkGameOver = 0;


var drawAnemy = true;
var drawAnemy2 = true;







/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;


const GAMEOVER = 2;

const UITLEG = 3;

var spelStatus = UITLEG;





var floorY = 650;

var vijand3leven = false;
var vijand3Speed = 4;
var vijand3X = 640;
var vijand3Y = 1700;
var vijand3Spawn = vijand3X;




//var vijand2X = 20;
//var vijand2Y = 70;
var vijand2Speed = 3;
var vijand2Leven = true;
var vijand2Y = 640;
var vijand2X = 1600;
var vijand2Spawn = vijand2X;


//var vijandX = 20;
//var vijandY = 70;
var vijandSpeed = 5;
var VijandLeven = true;

var vijandY = 640;
var vijandX = 1400;
var vijandSpawn = vijandX;







var spelerX = 600; // x-positie van speler
var spelerY = floorY; // y-positie van speler

var spelerSpringt = false;
var springSnelheid = 0;
var springSnelheidStart = 6;
var zwaartekracht = 0.2;



//var health = 100;  // health van speler
//var vijandhealth = 10; // vijand health

var kogelPlek = kogelX && kogelY;
var kogelX = 10000;
var kogelY = 10000;
var kogelVliegt = false;






/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
function preload() {
  tank = loadImage("/tank.png")
  blue = loadImage("/blue.png")
  slecht = loadImage("/slecht.png")
}


var beweegAlles = function() {
  // speler
  if (keyIsDown(68)) {
    spelerX = spelerX + 3;
  }

  if (keyIsDown(65)) {
    spelerX = spelerX - 3;

  }
img = loadImage('speler.jpeg'); // speler
  

  if (spelerSpringt === false && keyIsDown(KEY_SPACE)) {
    spelerSpringt = true;
    springSnelheid = springSnelheidStart;
  }
  if (spelerSpringt === true){
    spelerY = spelerY - springSnelheid;
    springSnelheid = springSnelheid - zwaartekracht;
  }

  if (spelerY > floorY){
    spelerSpringt = false;
}
    



  // vijand
  if (VijandLeven === true && vijandX < 0) {
    VijandLeven = false;
  }

  if (VijandLeven === false && vijandX < 0) {
    vijandX = 1400;
    aantal = aantal -  1;

  }
  
  if (vijandX === 1400) {
    VijandLeven = true;
  }
  

  

 

  //vijand 2
  if (vijand2Leven === true && vijand2X < 0) {
    vijand2Leven = false;
  }


  if (vijand2Leven === false && vijand2X < 0) {
    vijand2X = 1600;
  }
  
  if (vijand2X === 1600) {
    vijand2Leven = true;
  }

  if (vijand3leven === false && aantal === 5){
    vijand3leven = true;
    
  }
  if (vijand3leven === true && vijand3X < 0){
    vijand3X = 1500;
  }

  


  
  

  



  // kogel

  if (kogelVliegt === false && keyIsDown(74)) {
    kogelVliegt = true
    kogelX = spelerX;
    kogelY = spelerY;
  }
  if (kogelVliegt === true) {
    kogelX = kogelX + 7;
  }

  if (kogelVliegt === true &&
    kogelX > 1400) {
    kogelVliegt = false;
  }

if (kogelVliegt === true && 
  vijandX - kogelX < 26 &&
   kogelX - vijandX < 26 &&
   vijandY - kogelY < 26 &&
   kogelY - vijandY < 26 ) {
  
  VijandLeven = false;
  
  kogelVliegt = false;

  aantal = aantal + 1;
  console.log("score = " + aantal)
}

  if (kogelVliegt === true && 
    vijand2X - kogelX < 26 &&
     kogelX - vijand2X < 26 &&
     vijand2Y - kogelY < 26 &&
     kogelY - vijand2Y < 26 ) {
    kogelVliegt = false;
    
    aantal = aantal - 1;
    console.log("score = " + aantal)
  

  }
  
  if (kogelVliegt === false){
    kogelX = kogelPlek;
  }

 
  if (VijandLeven === false){
    vijandX = 1400;
    VijandLeven = true;
  }

  //vijand 2
  


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
//vijand 2
  if (spelerX - vijand2X < 26 &&
    vijand2X - spelerX < 26 &&
    spelerY - vijand2Y < 26 &&
    vijand2Y - spelerY < 26) {
    aantal = aantal - 1;

    console.log("botsing" + aantal)
  }

  //vijand
  if (kogelX - vijandX < 26 &&
    vijandX - kogelX < 26 &&
    kogelY - vijandY < 26 &&
    vijandY - kogelY < 26) {
    kogelVliegt = false;
    VijandLeven = false;

    aantal = aantal + 1 ;
    console.log("score = " + aantal)
    console.log("botsing = " + aantal)
    
    

    drawAnemy = false;
  
    
   
  }

  
    if (kogelX - vijand2X < 26 &&
      vijand2X - kogelX < 26 &&
      kogelY - vijand2Y < 26 &&
      vijand2Y - kogelY < 26) {

      kogelVliegt = false;
      aantal = aantal - 1;
      


      drawAnemy2 = false;
    }

    
  
  

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
 
  //achtergrond
  background(bg);
  fill("red");
  ellipse( 690,85,300,100);
  fill("yellow");
    text("score = " + aantal, 575, 100);
  
 



if (drawAnemy === true) {

  // vijand
  image(slecht, vijandX, vijandY, 100, 100);
  vijandX = vijandX - vijandSpeed;
}

  if (drawAnemy2 === true){
  image(blue, vijandX, vijandY, 50, 50);
  vijand2X = vijand2X - vijand2Speed;

 
  
}

  fill("purple")
  rect(vijand3X, vijand3Y, 50, 50)
  if (vijand3leven === true){
  vijand3X = vijand3X - vijand3Speed;
  }
  




  // kogel
  fill("yellow");
  ellipse(kogelX, kogelY, 20, 20);





  image (img,  0,  0);

  // speler
  image(tank, spelerX - 25, spelerY - 25, 50, 50)

  // punten en health

  return false;
  
};


var checkGameOver = function() {

  if (spelerX - vijandX < 52 &&
    vijandX - spelerX < 26 &&
    spelerY - vijandY < 52 &&
    vijandY - spelerY < 26) {
    return true;
  }
 
  if (aantal > highscore) {
    highscore = aantal;
  }
  //vijand 2
  if (spelerX - vijand2X < 52 &&
    vijand2X - spelerX < 26 &&
    spelerY - vijand2Y < 52 &&
    vijand2Y - spelerY < 26) {
    return true;
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
    beweegAlles( );
    verwerkBotsing(  );
    tekenAlles();
   
      if (checkGameOver()) {
        spelStatus = GAMEOVER;

      }
    console.log("spelen");
  }
  
  if (spelStatus === GAMEOVER) {

    // teken game-over scherm
    console.log("game over");
    textSize(50);
    fill("white");
    fill("pink");
    rect( 0,0,1280,720);
    fill("black");
    text(" GAME OVER ", 475, 100);
    text(" Score ="  , 500, 400);
    text(aantal, 725, 400)
    text("highscore = ", 500, 500)
    text(highscore, 825, 500)
    
    if (keyIsDown(32)) { //spatie
      spelerX = 600;
      vijandX = vijandSpawn;
      vijand2X = vijand2Spawn;
      vijand3X = vijand3Spawn;
      aantal = 0;
      spelStatus = UITLEG;
      
      
      
    }

  }
    if (spelStatus === UITLEG) {
      // teken UITLEG SCHERM scherm
      console.log("uitleg");
      textSize(50);
      fill("black");
      rect( 0,0,1280,720);
      fill("red");
      text("schiet zo veel mogelijk dingen ", 325, 150);
      text("klik op enter = start ", 400, 250)
      if (keyIsDown(13)){
        spelerX = 600;
        vijandX = vijandSpawn;
        vijand2X = vijand2Spawn;
        vijand3X = vijand3Spawn;
        spelStatus = SPELEN;
      }
      
      
    }

  


    
  }

     