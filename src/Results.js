import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  return (
    <div className="results">
      <h2>{props.word.word}</h2>
      <Meanings word={props.word} />
    </div>
  );
}
