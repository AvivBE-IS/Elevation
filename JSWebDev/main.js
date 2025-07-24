const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const checkReservation = function () {
  const input = document.getElementById("myInput");
  let name = input.value;
  input.value = "";
  input.ariaPlaceholder = "Enter name";
  if (name in reservations && !reservations[name].claimed)
    console.log(`Welcome ${name}`);
  if (name in reservations && reservations[name].claimed)
    console.log("Hmm, someone already claimed this reservation");
  if (!(name in reservations)) console.log("You have no reservation.");
};
