const products = [
  {
    nev: "Tomb Raider Definitive Edition",
    link: "https://psnprofiles.com/guide/4610-tomb-raider-definitive-edition-trophy-guide",
    difficulty: 3,
    hours: 25,
  },
  {
    nev: "Overcooked AYCE",
    link: "https://psnprofiles.com/guide/11239-overcooked-all-you-can-eat-trophy-guide",
    difficulty: 3,
    hours: 15,
  },
  {
    nev: "Descenders",
    link: "https://psnprofiles.com/guide/11527-descenders-trophy-guide#32-bring-a-friend",
    difficulty: 5,
    hours: 30,
  },
  {
    nev: "Grid Legends",
    link: "https://www.griffinsgamingguides.com/grid-legends-trophy-guide/",
    difficulty: 4,
    hours: 75,
  },
  {
    nev: "Kena",
    link: "https://psnprofiles.com/guide/12982-kena-bridge-of-spirits-trophy-guide",
    difficulty: 5,
    hours: 25,
  },
  {
    nev: "Tetris",
    link: "https://psnprofiles.com/guide/14550-tetris-effect-trophy-guide",
    difficulty: 9,
    hours: 150,
  },
  {
    nev: "Meet Your Maker",
    link: "https://psnprofiles.com/guide/16536-meet-your-maker-trophy-guide",
    difficulty: 4,
    hours: 25,
  },
  {
    nev: "Pure Pool",
    link: "https://www.playstationtrophies.org/forum/topic/227706-pure-pool-~-trophy-guide-amp-roadmap/",
    difficulty: 10,
    hours: 150,
  },
  {
    nev: "Chess Ultra",
    link: "https://psnprofiles.com/guide/10706-chess-ultra-trophy-guide",
    difficulty: 2,
    hours: 15,
  },
  {
    nev: "F1 2020",
    link: "https://psnprofiles.com/guide/10496-f1-2020-trophy-guide",
    difficulty: 3,
    hours: 45,
  },
  {
    nev: "Minecraft Dungeons",
    link: "https://psnprofiles.com/guide/10289-minecraft-dungeons-trophy-guide",
    difficulty: 3,
    hours: 20,
  },
  {
    nev: "Horizon Forbidden West",
    link: "https://psnprofiles.com/guide/13933-horizon-forbidden-west-trophy-guide",
    difficulty: 4,
    hours: 40,
  },
  {
    nev: "Going Under",
    link: "https://psnprofiles.com/guide/13517-going-under-trophy-guide",
    difficulty: 3,
    hours: 15,
  },
  {
    nev: "Golf With Your Friends",
    link: "https://www.playstationtrophies.org/game/golf-with-your-friends/guide/",
    difficulty: 4,
    hours: 10,
  },
  {
    nev: "Spiritfarer",
    link: "https://psnprofiles.com/guide/10838-spiritfarer-trophy-guide",
    difficulty: 4,
    hours: 35,
  },
  {
    nev: "Yakuza 6",
    link: "https://psnprofiles.com/guide/6440-%E9%BE%8D%E3%81%8C%E5%A6%82%E3%81%8F6-%E5%91%BD%E3%81%AE%E8%A9%A9-trophy-guide",
    difficulty: 3,
    hours: 40,
  },
  {
    nev: "Life is Strange",
    link: "https://psnprofiles.com/guide/4060-life-is-strange-trophy-guide",
    difficulty: 1,
    hours: 10,
  },
  {
    nev: "The Escapists 2",
    link: "https://psnprofiles.com/guide/6468-the-escapists-2-trophy-guide",
    difficulty: 3,
    hours: 20,
  },
  {
    nev: "Uncharted The Lost Legacy",
    link: "https://psnprofiles.com/guide/6375-uncharted-the-lost-legacy-trophy-guide",
    difficulty: 3,
    hours: 20,
  },
  {
    nev: "Super Meat Boy",
    link: "https://psnprofiles.com/guide/3476-super-meat-boy-trophy-guide",
    difficulty: 10,
    hours: 100,
  },
  {
    nev: "Steep",
    link: "https://psnprofiles.com/guide/9002-steep-trophy-guide",
    difficulty: 7,
    hours: 30,
  },
  {
    nev: "Star Wars Jedi Fallen Order",
    link: "https://psnprofiles.com/guide/9339-star-wars-jedi-fallen-order-trophy-guide",
    difficulty: 3,
    hours: 30,
  },
  {
    nev: "FIFA 22",
    link: "https://psnprofiles.com/guide/13075-fifa-22-trophy-guide",
    difficulty: 3,
    hours: 65,
  },
  {
    nev: "Marvel's Guardians of the Galaxy",
    link: "https://psnprofiles.com/guide/13221-marvels-guardians-of-the-galaxy-trophy-guide",
    difficulty: 3,
    hours: 20,
  },
  {
    nev: "Crypt of the NecroDancer",
    link: "https://psnprofiles.com/guide/7171-crypt-of-the-necrodancer-trophy-guide",
    difficulty: 10,
    hours: 900,
  },
  {
    nev: "Overwatch 2",
    link: "https://psnprofiles.com/guide/4451-overwatch-2-trophy-guide",
    difficulty: 7,
    hours: 100,
  },
  {
    nev: "KeyWe",
    link: "https://psnprofiles.com/guide/13043-keywe-trophy-guide",
    difficulty: 5,
    hours: 15,
  },
  {
    nev: "PUBG",
    link: "https://psnprofiles.com/guide/11897-pubg-battlegrounds-trophy-guide",
    difficulty: 4,
    hours: 80,
  },
  {
    nev: "Dirt Rally 2.0",
    link: "https://psnprofiles.com/guide/8908-dirt-rally-20-trophy-guide",
    difficulty: 5,
    hours: 40,
  },
  {
    nev: "Need for Speed Heat",
    link: "https://psnprofiles.com/guide/10277-need-for-speed-heat-trophy-guide",
    difficulty: 4,
    hours: 35,
  },
  {
    nev: "Unrailed",
    link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1987448662",
    difficulty: 0,
    hours: 0,
  },
  {
    nev: "Arcadegeddon",
    link: "https://psnprofiles.com/guide/15363-arcadegeddon-trophy-guide",
    difficulty: 4,
    hours: 60,
  },
  {
    nev: "Tom Clancy's Ghost Recon Wildlands",
    link: "https://psnprofiles.com/guide/5860-tom-clancys-ghost-recon-wildlands-trophy-guide",
    difficulty: 4,
    hours: 55,
  },
  {
    nev: "Tennis World Tour 2",
    link: "https://psnprofiles.com/guide/12637-tennis-world-tour-2-trophy-guide",
    difficulty: 6,
    hours: 80,
  },
];

function ListGame(i) {
  let tag = document.createElement("div");
  tag.className = "game";

  //Link & Image
  let a = document.createElement("a");
  a.href = products[i].link;
  a.target = "_blank";

  let img = document.createElement("img");
  img.src = "images/" + products[i].nev + ".jpg";
  img.alt = products[i].nev;
  a.appendChild(img);

  //Difficulty
  let pDiff = document.createElement("p");
  let diffNum = products[i].difficulty;
  pDiff.innerHTML = "Difficulty</br>" + diffNum + "/10";

  pDiff.className = "stat";
  if (diffNum <= 3) pDiff.className += " stat-joke";
  else if (diffNum <= 5) pDiff.className += " stat-easy";
  else if (diffNum <= 7) pDiff.className += " stat-medium";
  else if (diffNum <= 9) pDiff.className += " stat-hard";
  else pDiff.className += " stat-extreme";

  //Hours
  let pHrs = document.createElement("p");
  let hrsNum = products[i].hours;
  pHrs.innerHTML = "Hours</br>" + hrsNum;

  pHrs.className = "stat";
  if (hrsNum <= 20) pHrs.className += " stat-joke";
  else if (hrsNum <= 40) pHrs.className += " stat-easy";
  else if (hrsNum <= 60) pHrs.className += " stat-medium";
  else if (hrsNum <= 80) pHrs.className += " stat-hard";
  else pHrs.className += " stat-extreme";

  //Append
  tag.appendChild(a);
  tag.appendChild(pDiff);
  tag.appendChild(pHrs);

  let to = document.getElementById("games");
  to.appendChild(tag);
}

//Listing
function ListAllGames() {
  document.getElementById("games").innerHTML = "";
  let totalHrs = 0;
  let totalLeft = 0;

  for (let i = 0; i < products.length; i++) {
    ListGame(i);
    totalLeft++;
    totalHrs += products[i].hours;
  }

  totalLeft += "";
  totalHrs += "";
  document.getElementById("hoursLeft").innerHTML = "Hours: " + totalHrs;
  document.getElementById("gamesLeft").innerHTML = "Games: " + totalLeft;
}

function ListByDiff(diff) {
  document.getElementById("games").innerHTML = "";
  let totalLeft = 0;
  let totalHrs = 0;

  if (diff == "joke") {
    for (let i = 0; i < products.length; i++) {
      let diffNum = products[i].difficulty;
      if (diffNum <= 3) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  } else if (diff == "easy") {
    for (let i = 0; i < products.length; i++) {
      let diffNum = products[i].difficulty;
      if (diffNum > 3 && diffNum <= 5) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  } else if (diff == "medium") {
    for (let i = 0; i < products.length; i++) {
      let diffNum = products[i].difficulty;
      if (diffNum > 5 && diffNum <= 7) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  } else if (diff == "hard") {
    for (let i = 0; i < products.length; i++) {
      let diffNum = products[i].difficulty;
      if (diffNum > 7 && diffNum <= 9) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  } else if (diff == "extreme") {
    for (let i = 0; i < products.length; i++) {
      let diffNum = products[i].difficulty;
      if (diffNum == 10) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  }

  totalLeft += "";
  totalHrs += "";
  document.getElementById("hoursLeft").innerHTML = "Hours: " + totalHrs;
  document.getElementById("gamesLeft").innerHTML = "Games: " + totalLeft;
}

function ListByHrs(hrs) {
  document.getElementById("games").innerHTML = "";
  let totalLeft = 0;
  let totalHrs = 0;

  if (hrs == "joke") {
    for (let i = 0; i < products.length; i++) {
      let hrsNum = products[i].hours;
      if (hrsNum <= 20) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  } else if (hrs == "easy") {
    for (let i = 0; i < products.length; i++) {
      let hrsNum = products[i].hours;
      if (hrsNum > 21 && hrsNum <= 40) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  } else if (hrs == "medium") {
    for (let i = 0; i < products.length; i++) {
      let hrsNum = products[i].hours;
      if (hrsNum > 41 && hrsNum <= 60) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  } else if (hrs == "hard") {
    for (let i = 0; i < products.length; i++) {
      let hrsNum = products[i].hours;
      if (hrsNum > 61 && hrsNum <= 80) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  } else if (hrs == "extreme") {
    for (let i = 0; i < products.length; i++) {
      let hrsNum = products[i].hours;
      if (hrsNum >= 81) {
        ListGame(i);
        totalLeft++;
        totalHrs += products[i].hours;
      }
    }
  }

  totalLeft += "";
  totalHrs += "";
  document.getElementById("hoursLeft").innerHTML = "Hours: " + totalHrs;
  document.getElementById("gamesLeft").innerHTML = "Games: " + totalLeft;
}

window.onload = function () {
  ListAllGames();
};

//Dropdown
function onClickFunction(e) {
  document.getElementById(e).classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches(".diffButton")) {
    var diffDropdown = document.getElementById("diffDropdown");
    if (diffDropdown.classList.contains("show")) {
      diffDropdown.classList.remove("show");
    }
  }
  if (!e.target.matches(".hrsButton")) {
    var diffDropdown = document.getElementById("hrsDropdown");
    if (diffDropdown.classList.contains("show")) {
      diffDropdown.classList.remove("show");
    }
  }
};
