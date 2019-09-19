const swapKeysValues = object => {
  const swapped = {};
  for (let entry of Object.entries(object)) {
    const [key, value] = entry;
    swapped[value] = key;
  }
};

const Monograms = [
  '⚊',
  '⚋'
];

const TrigramForMonograms = {
  '⚊⚊⚊': '☰',
  '⚋⚊⚊': '☱',
  '⚊⚋⚊': '☲',
  '⚋⚋⚊': '☳',
  '⚊⚊⚋': '☴',
  '⚋⚊⚋': '☵',
  '⚊⚋⚋': '☶',
  '⚋⚋⚋': '☷',
}

const HexagramForTrigrams = {
  '☰☰': '䷀',
  '☷☷': '䷁',
  '☳☵': '䷂',
  '☵☶': '䷃',
  '☰☵': '䷄',
  '☵☰': '䷅',
  '☵☷': '䷆',
  '☷☵': '䷇',
  '☰☴': '䷈',
  '☱☰': '䷉',
  '☰☷': '䷊',
  '☷☰': '䷋',
  '☲☰': '䷌',
  '☰☲': '䷍',
  '☶☷': '䷎',
  '☷☳': '䷏',
  '☳☱': '䷐',
  '☴☶': '䷑',
  '☱☷': '䷒',
  '☷☴': '䷓',
  '☳☲': '䷔',
  '☲☶': '䷕',
  '☷☶': '䷖',
  '☳☷': '䷗',
  '☳☰': '䷘',
  '☰☶': '䷙',
  '☳☶': '䷚',
  '☴☱': '䷛',
  '☵☵': '䷜',
  '☲☲': '䷝',
  '☶☱': '䷞',
  '☴☳': '䷟',
  '☶☰': '䷠',
  '☰☳': '䷡',
  '☷☲': '䷢',
  '☲☷': '䷣',
  '☲☴': '䷤',
  '☱☲': '䷥',
  '☶☵': '䷦',
  '☵☳': '䷧',
  '☱☶': '䷨',
  '☳☴': '䷩',
  '☰☱': '䷪',
  '☴☰': '䷫',
  '☱☷': '䷬',
  '☴☷': '䷭',
  '☵☱': '䷮',
  '☴☵': '䷯',
  '☲☱': '䷰',
  '☴☲': '䷱',
  '☳☳': '䷲',
  '☶☶': '䷳',
  '☶☴': '䷴',
  '☱☳': '䷵',
  '☲☳': '䷶',
  '☶☲': '䷷',
  '☴☴': '䷸',
  '☱☱': '䷹',
  '☵☴': '䷺',
  '☱☵': '䷻',
  '☱☴': '䷼',
  '☳☳': '䷽',
  '☲☵': '䷾',
  '☵☲': '䷿',
}

const TrigramsForHexagram = swapKeysValues(HexagramForTrigrams);
const MonogramsForTrigram = swapKeysValues(TrigramForMonograms);

module.exports = {
  Monograms,
  TrigramForMonograms, HexagramForTrigrams,
  TrigramsForHexagram, MonogramsForTrigram,
}
