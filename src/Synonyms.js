export default function Synonyms(props) {
  const list = props.list;

  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  const sentence = list.join(", ") + ".";

  return (
    <p className="synonyms pt-3">
      <span className="synonyms-title">Synonyms:</span> {sentence}
    </p>
  );
}
