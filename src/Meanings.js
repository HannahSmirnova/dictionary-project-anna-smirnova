export default function Meanings(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {" "}
              {definition.definition}
              <br />
              <em> {definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
