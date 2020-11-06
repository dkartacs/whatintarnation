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

  const compare = (a, b) => {
    console.log(a.props.color + " " + valuePairs[a.props.color]);
    console.log(a.props.face + " " + valuePairs[a.props.face]);
    console.log(b.props.color + " " + valuePairs[b.props.color]);
    console.log(b.props.face + " " + valuePairs[b.props.face]);
    if (valuePairs[a.props.color] < valuePairs[b.props.color]) {
      return -1;
    } else if (valuePairs[a.props.color] > valuePairs[b.props.color]) {
      return 1;
    } else if (valuePairs[a.props.face] < valuePairs[b.props.face]) {
      return -1;
    } else if (valuePairs[a.props.face] > valuePairs[b.props.face]) {
      return 1;
    } else {
      return 0;
    }
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
