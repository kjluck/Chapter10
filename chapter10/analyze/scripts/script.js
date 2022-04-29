/*
    Student Name: Kenneth Luck
    File Name: script.js
    Date: Aptil 28, 2022
*/

//Function to display the first picture
function pic1 {
    var figElement = document.getElementById("placeholder");
    var imgSource = document.getElementById("image");
    var figCap = document.querySelector("figcaption");
    imgSource.src = "images/trunk-bay.jpg";
    imgSource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block";
    figCap.textContent = "Trunk Bay in St. John";
}

//Function to display the second picture
function pic2 {
  imgSource.src = "images/sanjuan.jpg";
  imgSource.alt = "Elevated view of San Jaun coast";
  figElement.style.display = "block";
  figCap.textContent = "Coast of San Jaun";
}

//Function to display third pciture
function pic3 {
  imgSource.src = "images/curacao.jpg";
  imgSource.alt = "The blue waters of Curacao";
  figElement.style.display = "block";
  figCap.textContent = "Curacao";
}
