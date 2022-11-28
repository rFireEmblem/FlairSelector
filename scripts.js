
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
const games = ['archanea', 'sov', 'genealogy', 'thracia', 'seals', 'sword', 'stones', 'por', 'awakening', 'fates', 'threehouses', 'heroes', 'tms', 'warriors', 'other']
let arrays = {};
let selected = [];
arrkeys = []

function clearSelects(){
  console.log('start')
  selected = [];

  let tempstr = "<button id='clear' onclick='clearSelects()'><img src=\"./clear.png\"></button>"
   
    tempstr += `<button id='go' onclick='request()'> <img src="./go.png"> </button>`

    document.getElementById("portraitBox").innerHTML = tempstr

   
}


function addToBar(flaircode){
 

  if (selected.length == 5){
    window.alert('You can only select up to 5 characters.')
    return;
  }

  else {
    selected.push(flaircode)
     console.log(selected)
    let tempstr = "<button id='clear' onclick='clearSelects()'><img src=\"./clear.png\"></button>"
    for (let i = 0; i < selected.length; i++) {
      tempstr += `<img src="./test/${data[selected[i]]}">`
    }

    tempstr += `<button id='go' onclick='request()'> <img src="./go.png"> </button>`

    document.getElementById("portraitBox").innerHTML = tempstr
  }


}

async function generate() {
  let tempStr = ''

  for (let i = 0; i < games.length; i++){
    let flairs = data[games[i]]
     console.log(games[i])
    for (let j = 0; j < flairs.length; j++){
      if(games[i] == 'other'){
        console.log(flairs[j])
      }

      let file = flairs[j].substring(1, flairs[j].length-1) + '.png'
      tempStr += `<button class="test" onclick="addToBar('${flairs[j]}')"> <img src="./all/${file}"> </button>`
    }




  }

  /*
  let flairs = data;
  let arr = [];
  let keys = Object.keys(flairs)
  for (let i = 0; i < keys.length; i++) {
    let img = flairs[keys[i]]
    let gamecode = parseInt(img.substring(0, img.indexOf('_')))
    let object = keys[i]
    if (!arrays.hasOwnProperty(gamecode)) {
      arrays[gamecode] = [];
      arrkeys.push(gamecode)
    }
    arrays[gamecode].push(object)
  }
  let tempStr = ""
  arrkeys.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < arrkeys.length; i++) {
    //let classID = classguide[arrkeys[i]]
    let arr = arrays[arrkeys[i]]
    arr = selectionSort(arr)
    for (let j = 0; j < arr.length; j++) {
  
      tempStr += `<button class="test" onclick="addToBar('${arr[j]}')"> <img src="./test/${data[arr[j]]}"> </button>`
    }
  }

  */
  document.getElementById("main").innerHTML = tempStr
}



function selectionSort(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = parseInt(data[arr[i]].substring(data[arr[i]].indexOf('_') + 1))
  }
  var minIdx, temp, temp2;
  let len = arr.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (arr2[j] < arr2[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    temp2 = arr2[i]
    arr2[i] = arr2[minIdx];
    arr2[minIdx] = temp2;
  }
  return arr;
}
