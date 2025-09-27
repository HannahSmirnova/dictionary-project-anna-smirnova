import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  const word = props.word;

  if (!word) {
    return null;
  }

  if (!word.meanings || word.meanings.length === 0) {
    return <p>No definition found. Try another word!</p>;
  }

  return (
    <div className="results">
      <h2>{word.word}</h2>
      <Meanings word={word} />
    </div>
  );
}
