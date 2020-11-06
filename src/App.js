import "./box/Box";
import Card from "./card/Card.jsx";

function App() {
  const valuePairs = {
    heart: 0,
    diamond: 1,
    club: 2,
    spade: 3,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 11,
    queen: 12,
    king: 13,
    ace: 14,
  };

  const shuffle = (list) => {
    let cursorIndex = list.length,
      temporary,
      random;
    while (0 !== cursorIndex) {
      random = Math.floor(Math.random() * cursorIndex);
      cursorIndex -= 1;

      temporary = list[cursorIndex];
      list[cursorIndex] = list[random];
      list[random] = temporary;
    }
    return list;
  };

  const colors = ["club", "diamond", "heart", "spade"];
  const faces = [
    "two",
    "three",
    "four",
    "five",
    "seven",
    "six",
    "eight",
    "nine",
    "ten",
    "jack",
    "queen",
    "king",
    "ace",
  ];
  let cards = [];
  colors.forEach((color) => {
    faces.forEach((face) => {
      cards.push({ color: color, face: face });
    });
  });
  cards = shuffle(cards);

  const realCards = [];

  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    realCards.push(
      <Card
        color={cards[i].color}
        face={cards[i].face}
        key={cards[i].color + cards[i].face}
      />
    );
  }

  console.log(realCards);

  return <div className="App">{realCards}</div>;
}

export default App;
