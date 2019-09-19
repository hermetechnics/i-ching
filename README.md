# i-ching

This is a JavaScript toolkit for the ancient Chinese [I Ching](https://en.wikipedia.org/wiki/I_Ching) divination system.

The divination method is taken from the [manual](https://mocagh.org/origin/windwalker-iching.pdf) to an old Amiga game, Windwalker.

It provides a method for generating a reading (without interpretation), and mapping tools for converting between I Ching monograms, trigrams and hexagrams as Unicode characters.

## Usage

To generate a reading:

```js
const IChing = require('i-ching');

IChing.getReading();
// { hexagram: '䷃' }

IChing.getReading();
// { hexagram: '䷱', changedHexagram: '䷕' }
```

To convert between symbols:

```js
IChing.Symbols.Monograms
// ['⚊','⚋']

IChing.Symbols.TrigramForMonograms['⚊⚋⚊']
// '☲'

IChing.Symbols.MonogramsForTrigram['☲']
// '⚊⚋⚊'

IChing.Symbols.HexagramForTrigrams['☰☵']
// '䷄'

IChing.Symbols.TrigramsForHexagram['☴☶']
// '䷑'
```

Note that the symbols are stacked bottom to top, so the first symbol appears under the second one, as per the I Ching convention.
