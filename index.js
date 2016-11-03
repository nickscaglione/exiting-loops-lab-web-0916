function breakOut(array, changeValue, stopValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] !== stopValue){
      array[i] = changeValue
    } else {
      return array
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue){
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFunction) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (findFunction(array[i])) {
      return array[i]
    }
  }
}
