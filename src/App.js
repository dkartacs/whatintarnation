import "./box/Box";
import Card from "./card/Card.jsx";
import _ from "lodash";
import React, {Component} from 'react';

export class App extends Component {
    render() {
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
                cards.push({color, face});
            });
        });
        cards = _.shuffle(cards);
        console.log(cards);
        return (
            <div className="App">
              {
                cards.map((card, index)=>(
                    <Card key={index} {...{
                      index,
                      color: card.color,
                      face: card.face,
                    }}/>
                ))
              }
            </div>
        );
    }
}

export default App;
