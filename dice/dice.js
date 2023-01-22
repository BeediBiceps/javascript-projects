let randomNo1=Math.floor(Math.random()*6)+1;

let randomImg="Alea" + randomNo1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImg);


let randomNo2=Math.floor(Math.random()*6)+1;
let randomImg2="Alea" + randomNo2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if(randomNo1>randomNo2)
{
    document.querySelector("h1").innerHTML="P1 wins";
}
else if(randomNo1<randomNo2)
{
    document.querySelector("h1").innerHTML="P2 wins";
}

else{
    document.querySelector("h1").innerHTML="draw!";
}


