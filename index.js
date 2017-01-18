function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var divs = document.querySelectorAll('#grand-node div')
  return divs[divs.length - 1]
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < list.length; i++) {
  list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}
