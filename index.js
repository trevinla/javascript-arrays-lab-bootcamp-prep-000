const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens[4] = ('Ralph');
  console.log(kittens);
  return kittens;
}
