import "./Card.scss";
import { colors, faces } from "./cardConstants.js";

const Card = ({ color, face }) => {
  const root = process.env.PUBLIC_URL;
  return (
    <>
      <img
        src={root + colors[color]}
        style={{ width: "10px", height: "10px" }}
        alt={color}
      />
      <img
        src={root + faces[face]}
        style={{ width: "12px", height: "12px" }}
        alt={face}
      />
    </>
  );
};

export default Card;
