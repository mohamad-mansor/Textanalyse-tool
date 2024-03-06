const readlineSync = require('readline-sync');

function analyzeText(text) {
  const words = text.toLowerCase().split(/\W+/);
  const wordCount = words.length;
  const uniqueWords = new Set(words);
  const longestWord = words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
  const wordFrequencies = {};

  words.forEach(word => {
    if (word) {
      wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
    }
  });

  return {
    wordCount,
    uniqueWords: uniqueWords.size,
    longestWord,
    wordFrequencies
  };
}

function main() {
  const text = readlineSync.question('Geben Sie einen Text ein: ');

  if (!text) {
    console.log('Bitte geben Sie einen gültigen Text ein.');
    return;
  }

  const analysis = analyzeText(text);

  console.log('Wortanzahl:', analysis.wordCount);
  console.log('Unterschiedliche Wörter:', analysis.uniqueWords);
  console.log('Längstes Wort:', analysis.longestWord);
  console.log('Wortfrequenz:', JSON.stringify(analysis.wordFrequencies));
}

main();