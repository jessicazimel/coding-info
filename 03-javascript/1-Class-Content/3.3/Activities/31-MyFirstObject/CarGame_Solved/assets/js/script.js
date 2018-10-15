 // Create reference variables for our DOM Elements
 var carActionHTML = document.getElementById('car-action');
 var carMakeHTML = document.getElementById('car-make');
 var carModelHTML = document.getElementById('car-model');
 var carMileageHTML = document.getElementById('car-mileage');
 var carIsWorkingHTML = document.getElementById('car-is-working');

 // Create reference to our reset button
 var resetButton = document.getElementById('reset-button');

 // Keeping track of progress variables
 var wins = 0;
 var losses = 0;
 var guessesLeft = 10
 
 var car = {
   make: "Honda",
   model: "Fit",
   color: "Blue Raspberry",
   mileage: 3000,
   isWorking: true,
   driveToWork: function () {
     this.mileage = this.mileage + 8;
     carActionHTML.textContent = "Drove To Work";
     carMileageHTML.textContent = this.mileage;
   },
   driveAroundWorld: function () {
     this.mileage = this.mileage + 24000;
     this.isWorking = false;
     carActionHTML.textContent = "Drove Around The World";
     carMileageHTML.textContent = this.mileage;
     carIsWorkingHTML.textContent = this.isWorking;
   },
   getTuneUp: function () {
     this.isWorking = true;
     carActionHTML.textContent = "Got A Tune Up";
     carIsWorkingHTML.textContent = this.isWorking;
   },
   honk: function () {
     carActionHTML.textContent = "Honked Horn";
   },
   reWriteStats: function () {
     this.mileage = 3000;
     this.isWorking = true;
     carActionHTML.textContent = "Reset Car Stats";
     carMileageHTML.textContent = this.mileage;
     carIsWorkingHTML.textContent = this.isWorking;
   }
 };

//  Initially write default car info to DOM
 carMakeHTML.textContent = car.make;
 carModelHTML.textContent = car.model;
 carIsWorkingHTML.textContent = car.isWorking;
 carMileageHTML.textContent = car.mileage;


//  Listen for keyup event on document (DOM)
 document.onkeyup = function (event) {
   console.log(event);

   // capture whatever keyboard key i just clicked
   var userKey = event.key;

   // if userKey is 'd', then run driveToWork
   if (userKey === 'd') {
     car.driveToWork();
   }
   // else if userKey is 'w', then run driveAroundTheWorld
   else if (userKey === 'w') {
     car.driveAroundWorld();
   }
   // else if userKey is 't', then run getTuneUp
   else if (userKey === 't') {
     car.getTuneUp();
   }
   // else if userKey is 'h', then run honk
   else if (userKey === 'h') {
     car.honk();
   }
   // else alert that user didn't enter a valid car command
   else {
     carActionHTML.textContent = "You didn't enter a valid car command. Please enter 'd', 'w', 't', 'h', or 's'.";
   }
 }

 // Adds a 'click' event listener to our resetButton and executes car.reWriteStats on click
 resetButton.addEventListener('click', car.reWriteStats);