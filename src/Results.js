import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (!props.word) {
    return <p>No definition found. Try another word!</p>;
  }
  return (
    <div className="results">
      <h2>{props.word.word}</h2>
      <Meanings word={props.word} />
    </div>
  );
}
