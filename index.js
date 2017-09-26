const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.push(name);
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyAppendKitten('Ralph');
