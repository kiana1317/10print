/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns
var wreduced = w

function draw () {
  setTimeout(draw, 100)
  let output = '\033[0;41m'
  var change = Math.round(w * Math.random())
  if( wreduced < w * Math.random()){
    for (let i = wreduced; i < change; i++) {
      var color = (Math.round(i*Math.random()) % 2 === 0) ? '\033[0;35m' : '\033[0;36m'
      if (Math.random() > 0.8) {
        output += `${color}╝`
      } else if (Math.random() > 0.6) {
        output += `${color}╚`
      }else if (Math.random() > 0.4) {
        output += `${color}╔`
      }else if (Math.random() > 0.2) {
        output += `${color}╗`
      }else {
        output += `${color}╬`
      }
    }
      wreduced = wreduced + 1

  }
  else{
    for (let i = wreduced; i > 0; i--) {
      var color = (Math.round(i*Math.random()) % 2 === 0) ? '\033[0;35m' : '\033[0;36m'
      if (Math.random() > 0.8) {
        output += `${color}╝`
      } else if (Math.random() > 0.6) {
        output += `${color}╚`
      }else if (Math.random() > 0.4) {
        output += `${color}╔`
      }else if (Math.random() > 0.2) {
        output += `${color}╗`
      }else {
        output += `${color}╬`
      }
    }
    wreduced = wreduced - 1
  }

  console.log(output)

}

draw()
