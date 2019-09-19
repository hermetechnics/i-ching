const Symbols = require('./symbols.js');

const coinHistogram = (histo, coin) => {
  histo[coin]++;
  return histo;
};

const tossCoins = () => {
  const coins = Math.floor(Math.random() * 8).toString(2).padStart(3, 0);
  return Array.from(coins).reduce(coinHistogram, [0, 0]).join('');
}

const LineForms = {
  '12': '⚊',
  '21': '⚋',
  '03': '⚊.',
  '30': '⚋.',
}

const changeLineForm = lineForm => {
  if (lineForm.includes('.')) {
    if (lineForm[0] === '⚊') {
      return '⚋';
    } else {
      return '⚊';
    }
  }

  return lineForm;
}

const generateTrigram = () => {
  const lineForms = [];
  let changingForm = false;

  for (let line = 0; line < 3; line++) {
    const tossedCoins = tossCoins();
    const lineForm = LineForms[tossedCoins];
    // we unshift instead of push, to maintain the traditional insertion order
    lineForms.unshift(lineForm);

    if (lineForm.includes('.')) {
      changingForm = true;
    }
  }

  const monograms = lineForms.map(lf => lf.replace('.', ''));
  const trigram = Symbols.TrigramForMonograms[monograms.join('')];

  const output = { trigram, lineForms };

  if (changingForm) {
    const changingForms = lineForms.map(changeLineForm);
    output.changedTrigram = Symbols.TrigramForMonograms[changingForms.join('')];
  }

  return output;
}

const getReading = () => {
  const lower = generateTrigram();
  const upper = generateTrigram();

  const hexagram = Symbols.HexagramForTrigrams[lower.trigram.concat(upper.trigram)];

  if (lower.changedTrigram || upper.changedTrigram) {
    const lowerChanged = lower.changedTrigram || lower.trigram;
    const upperChanged = upper.changedTrigram || upper.trigram;
    const changedHexagram = Symbols.HexagramForTrigrams[lowerChanged.concat(upperChanged)];
    return { hexagram, changedHexagram };
  }

  return { hexagram };
}

module.exports = {
  getReading,
  Symbols
}
