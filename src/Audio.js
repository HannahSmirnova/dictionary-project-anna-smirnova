import { useEffect, useState } from "react";
import axios from "axios";

export default function Audio(props) {
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    if (!props.word) {
      setAudioUrl(null); // Clear audio if word is empty
      return;
    }

    setAudioUrl(null); // Clear previous audio immediately

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${props.word}`;

    axios
      .get(apiUrl)
      .then(function (response) {
        const phonetics = response.data[0].phonetics;
        const audio = phonetics.find((p) => p.audio)?.audio;
        setAudioUrl(audio);
      })
      .catch(function (error) {
        console.error("Audio fetch error:", error);
        setAudioUrl(null);
      });
  }, [props.word]);

  if (!audioUrl) {
    return null;
  }

  return (
    <audio controls>
      <source src={audioUrl} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
