const body = document.querySelector("body");

const betButton = document.getElementById("bet-button");
const betForm = document.getElementById("bet-form");

const inputElement = document.getElementById("champ"); //

const ulgame = document.getElementById("dish-covers"); //

const ligame = ulgame.children; //

const decreaseBonesButton = document.getElementById("decrease-bone-btn");
const increaseBonesButton = document.getElementById("increase-bone-btn");
const numberOfBone = document.getElementById("bet-button");

const decreaseMoneyButton = document.getElementById("decrease-money-btn");
const increaseMoneyButton = document.getElementById("increase-money-btn");

const headerBalance = document.getElementById("header-balance");
const balance = document.getElementById("balance");
const betInput = document.getElementById("bet-input");
const boneInput = document.getElementById("bone-input");
const history = document.getElementById("history");
const gainDiv = document.getElementById("gain");
const betDiv = document.getElementById("bet-cashout");
const countOfChicken = document.getElementById("chickencount");
const countOfbone = document.getElementById("bonecount");
let bonesCount = 1;
let money = 5;
let NumberOfChicken = 0;
let Solde = 1000.0;
let info = {};
let NumberOfGame = 0;



function TotalOfBone(NumberOfBone) {
  for (let a = 0; a < ulgame.children.length; a++) {
    ulgame.children[a].dataset.etat = undefined;
    ulgame.children[a].children[0].src = "./img/closed-dish-cover.png";
  }

  for (let i of localStorage.getItem("bones").split(",")) {
    const bonesCountElement = document.getElementById(i);
    if (bonesCountElement.dataset.etat == "Bone") {
      i--;
    } else {
      bonesCountElement.dataset.etat = "Bone";
    }
  }
}

function changeAllLi(a) {
  ligame[a].children[0].classList.add("hide");

  setTimeout(function () {
    if (ligame[a].dataset.etat == "Bone") {
      ligame[a].children[0].src = "./img/os_jeu_du_poulet-removebg-preview.png";
      ligame[a].children[0].classList.remove("hide");
    } else {
      ligame[a].children[0].src = "./img/Cloche-ouverte-poulet.png";
      ligame[a].children[0].classList.remove("hide");
    }
  }, 115);
}

for (let a = 0; a < ligame.length; a++) {
  changeAllLi(a);
}

TotalOfBone(bonesCount);
