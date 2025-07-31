getRandomWord((randomWord) => {
  console.log(`Random Word: ${randomWord}`);

  getSynonyms(randomWord, (synonyms) => {
    console.log(`Synonyms of ${randomWord}:`, synonyms);
    let synonym = synonyms[0]; // Use the first synonym

    getSentiment(synonym, (sentiment) => {
      let sentimentDescription = getSentimentDescription(sentiment);
      console.log(
        `Sentiment of "${synonym}" (Synonym of ${randomWord}): ${sentimentDescription}`
      );
    });
  });
});

getRandomWord()
  .then((word) => {
    return getSynonyms(word);
  })
  .then((synonym) => {
    return getSentiment(synonym, sentiment);
  })
  .then();
