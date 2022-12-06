/*function generate() {
  let keys = Object.keys(data)
  tempStr = ""
  for (let i = 0; i < keys.length; i++) {
    tempStr += `<button class="test"> <img src="./test/${keys[i]}">`
  }
  document.getElementById("main").innerHTML = tempStr
}

*/
const NUMBER_OF_ARRAYS = 42
const games = ['threehouses', 'archanea', 'sov', 'genealogy', 'thracia', 'seals', 'sword', 'stones', 'por', 'rd', 'awakening', 'fates', 'feh', 'tms', 'warriors', 'cipher', 'engage']
const buttons = ['archanea', 'sov', 'genealogy', 'thracia', 'seals', 'sword', 'stones', 'por', 'rd', 'awakening', 'fates', 'threehouses', 'engage', 'feh', 'tms', 'warriors', 'cipher']
//const themes = ['archanea', 'sov', 'genealogy', 'thracia', 'seals', 'sword', 'stones', 'por', 'rd', 'awakening', 'fates', 'threehouses','engage', 'feh', 'tms']
const themes = ['sov', 'stones', 'awakening', 'fates', 'threehouses', 'feh', 'sword', 'archanea', 'genealogy', 'por', 'tms']
let current = 'threehouses';
let theme = 'threehouses';
//cipher
let arrays = {};
let selected = [];
arrkeys = []

function clearSelects() {
  console.log('start')
  selected = [];
  let tempstr = "<button id='clear' onclick='clearSelects()'><img src=\"./clear.png\"></button>"
  tempstr += `<button id='go' onclick='request()'> <img src="./go.png"> </button>`
  document.getElementById("portraitBox").innerHTML = tempstr
}

function generateButtonBar() {
  let element = document.getElementById('buttonBox');
  let str = " "
  let str2 =`<button id='clear' onclick='clearSelects()'> <img src="./clear.png"></button> <button id='go' onclick='request()'> <img src="./go.png"></button>`
  for (let j = 0; j < buttons.length; j++) {
    str += `<button onclick="filter('${buttons[j]}')">`
    for (let i = 0; i < themes.length; i++) {
      str += `<img class='${themes[i]}theme' src="title_cards/${themes[i]}/${buttons[j]}.png" style="display:none;"`
      if (themes[i] == buttons[j] || 
        (themes[i] == 'sov' && buttons[j] == 'cipher') || 
        (themes[i] == 'awakening' && buttons[j] == 'warriors') ||
        (themes[i] == 'por' && buttons[j] == 'rd') ||
        (themes[i] == 'feh' && buttons[j] == 'engage') ||
        (themes[i] == 'genealogy' && buttons[j] == 'thracia') ||
        (themes[i] == 'sword' && buttons[j] == 'seals')
        ) {
        str += `id="${buttons[j]}img">`
      }
      else {
        str += '>'
      }
    }
    str += `</button>`
  }
  element.innerHTML = str;
}

function generateSmallButtons() {
  let element = document.getElementById('portraitBox');

  let str =`<button id='clear' onclick='clearSelects()'>`
  let str2 = `<button id='go' onclick='request()'>`

    for (let i = 0; i < themes.length; i++) {
      str += `<img class='${themes[i]}theme' src="title_cards/${themes[i]}/clear.png" style="display:none;">`
      str2 += `<img class='${themes[i]}theme' src="title_cards/${themes[i]}/go.png" style="display:none;">`
      
    }
    str += `</button>`
     str2 += `</button>`
  
  element.innerHTML = str + str2;
}




function addToBar(flaircode) {
  if (selected.length == 5) {
    window.alert('You can only select up to 5 characters.')
    return;
  } else {
    selected.push(flaircode)
    console.log(selected)
    let tempstr = "<button id='clear' onclick='clearSelects()'><img src=\"./clear.png\"></button>"
    for (let i = 0; i < selected.length; i++) {
      tempstr += `<img src="./all/${selected[i].substring(1, selected[i].length-1)}.png">`
    }
    tempstr += `<button id='go' onclick='request()'> <img src="./go.png"> </button>`
    document.getElementById("portraitBox").innerHTML = tempstr
  }
}

function filter(game) {

  console.log('test')
  let nodes = document.getElementsByClassName(current)

  for (let i = 0; i < nodes.length; i++) {
    let hero = nodes[i];
    hero.style.display = 'none';
  }

  nodes = document.getElementsByClassName(`${theme}theme`)
 
  for (let i = 0; i < nodes.length; i++) {
    let hero = nodes[i];
    hero.style.display = 'none';
  }




  nodes = document.getElementsByClassName(game)
  console.log(nodes)
  for (let i = 0; i < nodes.length; i++) {
    let hero = nodes[i];
    hero.style.display = 'inline-block';
  }





  let id = `${current}img`;
  let file = `title_cards/${theme}/${current}.png`;
  document.getElementById(id).src = file;

  id = `${game}img`;

  theme = game;

  switch(game){
    case 'cipher':{
      theme = 'sov'
    }
    break;
       case 'warriors':{
      theme = 'awakening'
    }
    break;
       case 'thracia':{
      theme = 'genealogy'
    }
    break;
       case 'engage':{
      theme = 'feh'
    }
    break;
       case 'rd':{
      theme = 'por'
    }
    break;
       case 'seals':{
      theme = 'sword'
    }
    break;

  }


  nodes = document.getElementsByClassName(`${theme}theme`)

  for (let i = 0; i < nodes.length; i++) {
    let hero = nodes[i];
    hero.style.display = 'inline-block';
  }



  file = `title_cards/${theme}/${game}_sel.png`;
  document.getElementById(id).src = file;
  current = game;
  document.getElementsByTagName("body")[0].style.backgroundImage = `url(assets/backdrops/${game}.png)`
}
async function generate() {
  let tempStr = ''
  for (let i = 0; i < games.length; i++) {
    tempStr += `<div class="${games[i]}" style="display:none;"><br>`
    let entry = data[games[i]]
    let selects = entry.sections;
    for (let j = 0; j < selects.length; j++) {
      tempStr += `<br><br>${selects[j]}<br><br>`
      let flair = entry.flairs[j]
      for (let k = 0; k < flair.length; k++) {
        let file = flair[k].substring(1, flair[k].length - 1) + '.png'
        tempStr += `<button class="test" onclick="addToBar('${flair[k]}')"> <img src="./all/${file}"> </button>`
      }
    }
    tempStr += "</div>"
  }
  document.getElementById("main").innerHTML = tempStr
  let nodes = document.getElementsByClassName(`threehouses`)
  for (let i = 0; i < nodes.length; i++) {
    let hero = nodes[i];
    hero.style.display = 'inline-block';
  }

  id = `threehousesimg`;
  file = `title_cards/threehouses/threehouses_sel.png`;
  document.getElementById(id).src = file;

  nodes = document.getElementsByClassName(`threehousestheme`)
  for (let i = 0; i < nodes.length; i++) {
    let hero = nodes[i];
    hero.style.display = 'inline-block';
  }

}

function request() {
  let url = `https://www.reddit.com/message/compose/?to=Bot-ta_The_Beast&subject=flair&message=`
  for (let i = 0; i < selected.length; i++) {
    url += selected[i]
    url += '%0a'
  }
  url = url.slice(0, -3)
  window.open(url, '_blank');
}