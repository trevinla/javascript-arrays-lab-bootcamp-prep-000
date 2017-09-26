const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  var moreKittens = kittens.push('Ralph');
  //kittens[3] = ('Ralph');
  // console.log(kittens);
  return moreKittens;
}
