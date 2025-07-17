var firstPiece = { id: 101, name: "Ofri" };

var seoncdPiece = { country: "Israel" };

const fullPiece = { ...firstPiece, ...seoncdPiece };
console.log(fullPiece);
