const fetchData = function () {
  const input = $("#input").val().trim();
  $("#result").empty();
  if (!input) {
    $("#result").html(
      '<div style="color:red">Please enter a furniture name.</div>'
    );
    return;
  }
  $.get(`priceCheck/${input}`, function (data) {
    if (data.price !== null) {
      $("#result").html(`<div>Price for <b>${input}</b>: ${data.price}</div>`);
    } else {
      $("#result").html(`<div>No price found for <b>${input}</b></div>`);
    }
  });
};

const buyFurniture = function () {
  const item = $("#buy-input").val().trim();
  $("#result").empty();
  if (!item) {
    $("#result").html(
      '<div style="color:red">Please enter a furniture name to buy.</div>'
    );
    return;
  }
  $.get(`/buy?name=${encodeURIComponent(item)}`, function (data) {
    if (data.success) {
      // Get price for the item
      $.get(`/priceCheck/${encodeURIComponent(item)}`, function (priceData) {
        if (priceData.price !== null) {
          $("#result").html(
            `Congratulations, you've just bought <b>${item}</b> for <b>${priceData.price}</b>. There are <b>${data.inventory}</b> left now in the store.`
          );
        } else {
          $("#result").html(
            `Congratulations, you've just bought <b>${item}</b>. There are <b>${data.inventory}</b> left now in the store.`
          );
        }
      });
    } else {
      $("#result").html(
        `<div style="color:red">${data.message || "Purchase failed."}</div>`
      );
    }
  });
};

$(document).ready(function () {
  $("#search-btn").on("click", fetchData);
  $("#input").on("keypress", function (e) {
    if (e.which === 13) fetchData();
  });
  $("#buy-btn").on("click", buyFurniture);
  $("#buy-input").on("keypress", function (e) {
    if (e.which === 13) buyFurniture();
  });
});
