const fetch = function (queryType, queryValue) {
  const queryParam = `${queryType}:${queryValue}`;
  $.get(
    `https://www.googleapis.com/books/v1/volumes?q=${queryParam}`,
    function (data) {
      if (data.items && data.items.length > 0) {
        console.log("title= " + data.items[0].volumeInfo.title);
        for (let author of data.items[0].volumeInfo.authors)
          console.log(author);
      } else {
        console.log("No results found.");
      }
    }
  );
};
fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
fetch("title", "The Wise Man's Fears");
