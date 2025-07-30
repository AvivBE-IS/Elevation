const fetch = function (queryType, queryValue) {
  const queryParam = `${queryType}:${queryValue}`;
  $.get(
    `https://www.googleapis.com/books/v1/volumes?q=${queryParam}`,
    function (data) {
      if (data.items && data.items.length > 0) {
        console.log(data.items[0].volumeInfo.title);
      } else {
        console.log("No results found.");
      }
    }
  );
};
fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
fetch("title", "The Wise Man's Fears");
