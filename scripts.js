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
const games = ['threehouses']
// 'archanea', 'sov', 'genealogy', 'thracia', 'seals', 'sword', 'stones', 'por', 'awakening', 'fates', 'threehouses', 'heroes', 'tms', 'warriors', 'other'
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

async function generate() {
  let tempStr = '<br>'
  for (let i = 0; i < games.length; i++) {
    let entry = data[games[i]]
    console.log(entry)
    let selects = entry.sections;
    for (let j = 0; j < selects.length; j++) {
      tempStr += `<br><br>${selects[j]}<br><br>`
      let flair = entry.flairs[j]
      for (let k = 0; k < flair.length; k++) {
        let file = flair[k].substring(1, flair[k].length - 1) + '.png'
        tempStr += `<button class="test" onclick="addToBar('${flair[k]}')"> <img src="./all/${file}"> </button>`
      }
    }
  }
  document.getElementById("main").innerHTML = tempStr
}

function request(){
  let url = `https://www.reddit.com/message/compose/?to=Bot-ta_The_Beast&subject=flair&message=`
  for (let i = 0; i < selected.length; i++) {
    url += selected[i]
    url += '%0a'
  }
  url = url.slice(0, -3)

  window.open(url,'_blank');


}

