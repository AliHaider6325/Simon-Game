let body = document.querySelector("body");
let p = document.querySelector("p");
let a = Math.random(1 - 4) * 4;
let divNum = Math.floor(a);
console.log(divNum);
let divs = document.getElementsByClassName("Main");
let b = 1;
let counter = 2;
let rtn;
const Pattern = [divNum];
let Clicks = [divNum];
console.log(Clicks)

const Matching = () => {
  for (i = 0; i < Pattern.length; i++) {
    if (Clicks[i] == Pattern[i]) {
      Clicks.push(rtn)
    }
  }
}
body.addEventListener("keydown", function (event) {
  if (event.location == 0) {
    p.innerHTML = "Level 1";

    if (b == 1) {
      let OrignalColor = divs[divNum].style.backgroundColor;
      divs[divNum].style.backgroundColor = "white";
      setTimeout(() => {
        divs[divNum].style.backgroundColor = OrignalColor;  // Revert back to red after 0.3 seconds
      }, 500);
      b++;
    }


  }
});
console.log("okkkkkkkk")
console.log(Clicks)
for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function () {

    rtn = i;
    Clicks.push(rtn);
    console.log(Clicks)
    console.log(Clicks)
    if (rtn == divNum) {
      Pattern.push(divNum);
      // Hashing();

      if (Clicks.every((value, i) => value === Pattern[i])) {
        console.log(Pattern);
        a = Math.random(1 - 4) * 4;
        divNum = Math.floor(a);
        p.innerHTML = `Level ${counter}`;
        counter++;
        OrignalColor = divs[divNum].style.backgroundColor;
        divs[divNum].style.backgroundColor = "white";
        setTimeout(() => {
          divs[divNum].style.backgroundColor = OrignalColor; // Revert back to original color after 0.5 seconds
        }, 500);
      }
    } else {
      p.innerHTML = "You Failed :("
    }
  }
}



const Hashing = () => {
  const Clicks = []; // Initialize Clicks array


  i = 0;
  divs.forEach((div, i) => {
    div.onclick = function () {
      i++;
      // Store the index of the clicked div in Clicks array
      Clicks[i] = i;
    };
  });
};



