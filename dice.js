// Display the correct dice to match the radio selected

// 	- Define the HTML for each of the 3 dice images - each has a unique id
const addDice1 =
   '<div class="card"><img src="img/new.png" id="d1" class="card-img mx-auto dice" alt="dice"></div>';
const addDice2 =
   '<div class="card"><img src="img/new.png" id="d2" class="card-img mx-auto dice" alt="dice"></div>';
const addDice3 =
   '<div class="card"><img src="img/new.png" id="d3" class="card-img mx-auto dice" alt="dice"></div>';

// Create an array of the image IDs so we can loop through each one individually
let imgIds = ["#d1", "#d2", "#d3"];

// 	- Put a listener on each radio to detect when changed and if it is 'on' i.e checked
// 	- Adjust the inner HTML of the card deck to add the correct dice (cards) to match the radio selected - 1, 1&2 or all 3
$("#inlineRadio1").change(() => {
   if ($(this).prop({ checked: true })) {
      $(".card-deck").html(addDice1);
   }
});

$("#inlineRadio2").change(() => {
   if ($(this).prop({ checked: true })) {
      $(".card-deck").html(addDice1 + addDice2);
   }
});

$("#inlineRadio3").change(() => {
   if ($(this).prop({ checked: true })) {
      $(".card-deck").html(addDice1 + addDice2 + addDice3);
   }
});

$(".btn").click(() => {
   imgIds.forEach((image) => {
      // Check if d10 switch is off (when switch is off the .val() returns undefined i.e. falsy so reverse to true with ! in front)
      if (!$("#customSwitch1:checked").val()) {
         let roll = Math.floor(Math.random() * 6) + 1;
         console.log(image + " rolled " + roll);
         $(image).addClass("diceRoll");
         switch (roll) {
            case 6:
               $(image).attr("src", "img/number/6.png");
               break;
            case 5:
               $(image).attr("src", "img/number/5.png");
               break;
            case 4:
               $(image).attr("src", "img/number/4.png");
               break;
            case 3:
               $(image).attr("src", "img/number/3.png");
               break;
            case 2:
               $(image).attr("src", "img/number/2.png");
               break;
            case 1:
               $(image).attr("src", "img/number/1.png");
               break;
         }
      } else {
         let roll = Math.floor(Math.random() * 6) + 1;
         console.log(image + " rolled " + roll);
         $(image).addClass("diceRoll");
         switch (roll) {
            case 6:
               $(image).attr("src", "img/animal/6.png");
               break;
            case 5:
               $(image).attr("src", "img/animal/5.png");
               break;
            case 4:
               $(image).attr("src", "img/animal/4.png");
               break;
            case 3:
               $(image).attr("src", "img/animal/3.png");
               break;
            case 2:
               $(image).attr("src", "img/animal/2.png");
               break;
            case 1:
               $(image).attr("src", "img/animal/1.png");
         }
      }
   });
   // set timer to allow animation to run before removing animation class
   window.setTimeout(() => {
      $("img").removeClass("diceRoll");
   }, 550);
});

// UPGRADES - ideas
// Can't press roll button without selecting number of dice first
// Re-write the CSS file in SCSS (SASS) For practice?
// Background image toggler
// Re-factor!!
