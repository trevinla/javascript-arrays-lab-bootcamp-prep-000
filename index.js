const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  moreKittens = (...kittens + 'Ralph');
  return moreKittens;
}
