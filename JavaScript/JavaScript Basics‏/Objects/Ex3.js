const reservations = {
  bob: { claimed: false },
  ted: { claimed: true },
};

const NAME = "BOB"; //'Bob' or 'Ted';

if (NAME) {
  if (reservations[NAME.toLowerCase()].claimed) {
    console.log("Hmm, someone already claimed this reservation.");
  } else {
    console.log(`Welcome, ${NAME.toLowerCase()}`);
  }
} else {
  console.log("You have no reservation");
  reservations[NAME.toLowerCase()].claimed = false;
}
