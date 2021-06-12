/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 400; // y-positie van speler

var kogelX = 700;    // x-positie van kogel
var kogelY = 450;    // y-positie van kogel

var vijandX = 1300;   // x-positie van vijand
var vijandY = 400;   // y-positie van vijand

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


var tekenOver = function () {
  fill("yellow")
  rect (0, 0, 1280, 720)
}


var tekenMaan = function () {
  fill("white");
  circle(200, 150, 200, 200);
}


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("darkblue");
  rect(0, 0, 1280, 720);
};


/**
 * Tekent de grond
 */
var tekenGrass = function () {
  fill(85, 130, 12);
  rect(0, 500, 1280, 40);
};


/**
 * Tekent de grond
 */
var tekenGrond = function () {
  fill(64, 27, 11);
  rect(0, 500, 1280, 220);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
  fill(180, 170, 130);
  rect(vijandX, vijandY, 50, 100);
  fill(84, 163, 80)
  rect(vijandX, vijandY, 50, 40)
};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
  fill("grey");
  rect(kogelX, kogelY, 40, 25);
};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("white");
  rect(spelerX, spelerY, 50, 100);
  fill(237, 196, 180)
  rect(spelerX, spelerY, 50, 40);
  
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
  vijandX = vijandX - 4
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {
  if (mouseIsPressed){
    kogelX = kogelX + 10
  }
};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
  

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {
  if(kogelX > vijandX)
  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
  if(vijandX < 648) {
    spelStatus = GAMEOVER
  }
  
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    checkSpelerGeraakt
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand 
      }
      
      if (checkSpelerGeraakt()){
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler 
        spelStatus = GAMEOVER;
      }
      

      tekenVeld();
      if (checkSpelerGeraakt()) {
        tekenOver();
      }
      tekenMaan();
      tekenGrond();
      tekenGrass();
      tekenVijand(vijandX, vijandY);
      if (mouseIsPressed){
        tekenKogel(kogelX, kogelY);
      } 
      tekenSpeler(spelerX, spelerY);
      break;
      case GAMEOVER:
      // als spelStatus == GAMEOVER, dan wordt dit uitgevoerd
      break;
  }
}
