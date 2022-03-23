let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img1.jpeg') 
{
      
myImage.setAttribute('src','images/firefox.jpg');
    } else {
     
myImage.setAttribute('src','images/img1.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}






/* 
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

document.querySelector('html').addEventListener('click', () => {
    alert('Ouch! Stop poking me!!');
});

document.querySelector('html').addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
});

let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});

*/