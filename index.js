let shuffle = document.querySelector("#shuffle-btn");
let joke = document.querySelector(".joke");

const puns = [
  {
    pun: "Wanna heare a joke about potassium? K", col:'#55efc4'
  },
  {
    pun: `"[me narrating a documentary about narrators] "I can't hear what they're saying cuz I'm talking""`,col:'#a29bfe'
  },
  {
    pun: `"What should you do before criticizing Pac-Man? WAKA WAKA WAKA mile in his shoes"`, col:'#74b9ff'
  },
  {
    pun: `"What do you call a potato in space? Spudnik"`,col:'#ffeaa7'
  },
  {
    pun: `"Where do baby cows go to eat lunch? At the{} calf-eteria."`,col:'#fab1a0'
  },
  {
    pun: `"A sheep, a drum and a snake fall down a cliff badum tss"`, col:'#fd79a8'
  },
  {
    pun: `"What's a snakes favourite dance ? The mamba !"`, col:'#786fa6'
  },

  { pun: `"What do toads drink ? Croaka-cola !"` , col:'#e77f67'},
  { pun: `"Never trust atoms; they make up everything."` , col:'#778beb'},
];


shuffle.addEventListener('click',()=> {
    console.log('clicked')
    let random = Math.floor(Math.random()*puns.length);
    joke.innerText = puns[random].pun;
    document.body.style.backgroundColor = puns[random].col;

})
