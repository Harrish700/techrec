// COUNTDOWN

let date =
new Date("July 30, 2026 10:00:00").getTime();


setInterval(()=>{

let now =
new Date().getTime();

let diff=date-now;



document.getElementById("days").innerHTML =
Math.floor(diff/(1000*60*60*24));

document.getElementById("hours").innerHTML =
Math.floor(diff/(1000*60*60)%24);

document.getElementById("minutes").innerHTML =
Math.floor(diff/(1000*60)%60);

document.getElementById("seconds").innerHTML =
Math.floor(diff/1000%60);

},1000);


let cards =
document.querySelectorAll(".card");

let current=0;

function updateCards(){

cards.forEach(c=>{

c.classList.remove("active");

});

let activeCard = cards[current];

activeCard.classList.add("active");

activeCard.scrollIntoView({

behavior:"smooth",

block:"nearest",

inline:"center"

});


}

// manual card selection

cards.forEach((card,index)=>{


card.addEventListener("click",()=>{


current = index;


updateCards();


});


});

function moveCard(direction){


current+=direction;

if(current<0)

current=cards.length-1;

if(current>=cards.length)

current=0;
updateCards();
}

function updateCards(){
cards.forEach(c=>{

c.classList.remove("active");

});

let activeCard = cards[current];

activeCard.classList.add("active");





activeCard.scrollIntoView({
behavior:"smooth",
block:"nearest",
inline:"center"

});


}

document
.getElementById("theme")
.addEventListener("change",()=>{


document.body.classList.toggle("light");


});


document
.getElementById("form")
.addEventListener("submit",(e)=>{


e.preventDefault();


let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

if(name=="" || email==""){
alert("Fill all details");
return;

}

console.log({

name,
email

});

document.getElementById("msg").innerHTML =
"🎉 Registration Successful! ,Check your email for details.";

});

function scrollRegister(){

document
.getElementById("register")
.scrollIntoView();

}

let cursor =
document.querySelector(".ninja-cursor");


let angle=0;


document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX+"px";

cursor.style.top =
e.clientY+"px";
angle += 10;
cursor.style.transform =
`translate(-50%,-50%) rotate(${angle}deg)`;

});
