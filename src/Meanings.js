export default function Meanings(props) {
  const word = props.word;
  let phoneticSection = null;
  let meaningsSection = null;

  if (word.phonetic) {
    phoneticSection = <p>[{word.phonetic}]</p>;
  }

  if (word.meanings) {
    if (word.meanings.length > 0) {
      const groupedMeanings = {};

      for (let i = 0; i < word.meanings.length; i = i + 1) {
        const meaning = word.meanings[i];
        const part = meaning.partOfSpeech;

        if (!groupedMeanings[part]) {
          groupedMeanings[part] = [];
        }

        groupedMeanings[part].push(meaning);
      }

      const meaningSections = [];

      for (const part in groupedMeanings) {
        const definitions = groupedMeanings[part];
        const definitionItems = [];

        for (let i = 0; i < definitions.length; i = i + 1) {
          const def = definitions[i];
          const exampleItems = [];

          if (def.example) {
            exampleItems.push(
              <li key={"ex-" + i}>
                <em>{def.example}</em>
              </li>
            );
          }

          definitionItems.push(
            <li key={"def-" + i}>
              {def.definition}
              {exampleItems.length > 0 ? <ul>{exampleItems}</ul> : null}
            </li>
          );
        }

        meaningSections.push(
          <div key={part}>
            <p>
              <strong>{part}:</strong>
            </p>
            <ul>{definitionItems}</ul>
          </div>
        );
      }

      meaningsSection = <div>{meaningSections}</div>;
    }
  }

  return (
    <div className="meaning">
      {phoneticSection}
      {meaningsSection}
    </div>
  );
}
