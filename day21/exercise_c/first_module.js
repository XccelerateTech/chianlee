function randomNumberGenerator() {
  return Math.floor(Math.random() * 26) + 1; //The maximum is inclusive and the minimum is inclusive 
}

module.exports = randomNumberGenerator;