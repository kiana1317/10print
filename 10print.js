/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns
var w1 = Math.round(w * Math.random())
var w2 = Math.round(w * Math.random())
var max = Math.max(w1,w2)
var min = Math.min(w1,w2)
var positive = true

// For loop for creating each line of symbols
function loop(num){
  let output = ''
  for (let i = 0; i < num; i++) {
      var color = (Math.round(i*Math.random()) % 2 === 0) ? '\033[0;35m' : '\033[0;36m'
      if (Math.random() > 0.8) output += `${color}╝`
      else if (Math.random() > 0.6) output += `${color}╚`
      else if (Math.random() > 0.4) output += `${color}╔`
      else if (Math.random() > 0.2) output += `${color}╗`
      else output += `${color}╬`
  }
  console.log(output)
}

function draw () {
  setTimeout(draw, 70)
  let output = ''
  if (min === max || max >= w || min <= 0) {
    positive = !positive
    if(positive){
      min = Math.round(w * Math.random())
      while(min >= max) min = Math.round(w * Math.random())
    }
    else{
      max = Math.round(w * Math.random())
      while(max <= min) max = Math.round(w * Math.random())
    }
  }

  if(positive) {loop(max);  max-- }
  else{loop(min), min++ }
}


draw()
