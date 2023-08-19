const artists = ["Taylor_Swift", "Zara_Larsson", "Coldplay", "Ava_Max", "Dua_Lipa", "Ed_Sheeran", "Katy_Perry", "Ariana_Grande", "Jennifer_Lopez", "John_Newman", "Bruno_Mars", "The_Weeknd"];
const genres = ['Pop', 'EDM', 'Rock', 'HipHop'];
var numOfPreGen = genres.length;
var numOfCurGen = 0;
var numOfNexGen = 1;

window.onload = function() {
      for (let i = 0; i < artists.length; i++) {
            let artist = artists[i];
            let tag = document.createElement('div');
            let img = document.createElement('img');
            img.src = "Images/Pictures/" + artists[i] + "_Pic.png";
            img.alt = artists[i];
            tag.className = 'artist';
            tag.onclick = function () { openLink(); };
            tag.appendChild(img);
            let to = document.getElementById('artists');
            to.appendChild(tag);
        }
};

function prevGenre(){
      let preGen = document.getElementById('prevGenre');
      let curGen = document.getElementById('currGenre');
      let nexGen = document.getElementById('nextGenre');
      if (numOfCurGen == 1)
            numOfPreGen = genres.length - 1;
      if (numOfCurGen == 0) {
            numOfPreGen = genres.length - 2;
            numOfCurGen = genres.length - 1;
      }
      else{
            numOfCurGen--;
      }
      preGen.innerHTML = genres[numOfCurGen - 1];
      curGen.innerHTML = genres[numOfCurGen];
      nexGen.innerHTML = genres[numOfCurGen + 1];
}

function nextGenre(){
      let curGen = document.getElementById('currGenre');
      if (numOfCurGen + 1 == genres.length) {
            numOfCurGen = 0;
      }
      else{
            numOfCurGen++;
      }
      curGen.innerHTML = genres[numOfCurGen];
}