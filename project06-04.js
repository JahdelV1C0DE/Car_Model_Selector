"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: 
      Date:   

      Filename: project06-04.js
*/

// Selection lists in the web form


function showAll(selectList) { 

	let options = selectList.getElementsByTagName("option");
	let optionLength = options.length;
	
	//for loop iterates through the node listct
	for (let i = 0; i < optionLength[i]; i++){
		
	//displays the option within the selection list
	options[i].style.display = "block";
	} 
}


function filterSelect(selectList, category){
	
	let options = selectList.getElementsByTagName("option");
	
	let optionLength = options.length;
	//create a for loop to iterate through the node list
	for (let i = 0; i < optionsLength; i++) {
  // To access the className of the option I had to use options[i].className
  if (options[i].className === category) {
    // If the className matches the category set the style to block
    options[i].style.display = "block";
  } else {
    // If it doesn't match, set the style to "none"
    options[i].style.display = "none";
	}
  }
 }
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

document.getElementById("selectVehicle").addEventListener("click", function() {
 


  //selected option values from each select list
  let selectedMake = document.getElementById("make").value;
  let selectedModel = document.getElementById("model").value;
  let selectedTrim = document.getElementById("trim").value;

  // selected vehicle in the vehicle paragraph
  const vehicleParagraph = document.getElementById("vehicle");
  vehicleParagraph.textContent = `${selectedMake} ${selectedModel} ${selectedTrim}`;
  
  
  
  
});

	


// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


// Event handler to modify the content of the Model selection list
// when the Make selection list changes

make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}

// Event handler to modify the content of the Trim selection list
// when the Model selection list changes

model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
  }

