const app = "I don't do much."
const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyAppendKitten('Ralph');

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyPrependKitten('Bob');

function destructivelyRemoveLastKitten() {
  kittens.pop();
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyRemoveFirstKitten();

function appendKitten() {
  var moreKittens = ["Felix", ...kittens];
  console.log(moreKittens);
  return moreKittens;
}

appendKitten();
