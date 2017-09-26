const app = "I don't do much."
const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyAppendKitten('Ralph');
