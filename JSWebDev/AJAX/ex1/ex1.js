const fetch = function (ISBN) {
  $.get(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:` + ISBN,
    function (data) {
      console.log(data.items);
    }
  );
};
//
fetch("9780439023528");
fetch("1440633908");
fetch("9781945048470");
fetch("9780307417138 ");
