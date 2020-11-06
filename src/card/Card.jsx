import "./Card.scss";
import {colors, faces} from "./cardConstants.js";
import React, {Component} from 'react';

export class Card extends Component {
    render() {
        const root = process.env.PUBLIC_URL;
        const {color, face, index} = this.props;

        return (
            <>
                <span style={{fontSize: 20, fontWeight: 'bold', margin: 5}}>- {index}: </span>
                <span style={{border: '2px solid black', padding: 3}}>
                <img
                    src={root + colors[color]}
                    style={{width: "10px", height: "10px"}}
                    alt={color}
                />
                <img
                    src={root + faces[face]}
                    style={{width: "12px", height: "12px"}}
                    alt={face}
                />
                </span>
            </>
        );
    }
}

export default Card;

