import Synonyms from "./Synonyms";

export default function Meanings(props) {
  const word = props.word;
  let meaningsSection = null;

  if (word.meanings && word.meanings.length > 0) {
    const groupedMeanings = {};

    for (let i = 0; i < word.meanings.length; i++) {
      const meaning = word.meanings[i];
      const part = meaning.partOfSpeech || "unspecified";

      if (!groupedMeanings[part]) {
        groupedMeanings[part] = [];
      }

      groupedMeanings[part].push(meaning);
    }

    const meaningSections = [];

    for (const part in groupedMeanings) {
      const definitions = groupedMeanings[part];
      const definitionItems = [];

      for (let i = 0; i < definitions.length; i++) {
        const def = definitions[i];
        const exampleItems = [];

        if (def.example) {
          exampleItems.push(
            <li key={"ex-" + i}>
              Example: <em>{def.example}</em>
            </li>
          );
        }

        definitionItems.push(
          <li key={"def-" + i}>
            {def.definition}
            {exampleItems.length > 0 ? <ul>{exampleItems}</ul> : null}
            <Synonyms list={def.synonyms} />
          </li>
        );
      }

      meaningSections.push(
        <div key={part}>
          <p>
            <strong className="part-speech">{part}:</strong>
          </p>
          <ol>{definitionItems}</ol>
        </div>
      );
    }

    meaningsSection = <div className="meanings-grid">{meaningSections}</div>;
  }

  return <div className="meaning">{meaningsSection}</div>;
}
