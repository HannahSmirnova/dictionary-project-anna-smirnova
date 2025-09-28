import axios from "axios";
import { useEffect, useState } from "react";

export default function Images(props) {
  const [photos, setPhotos] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(
    function () {
      const keyword = props.keyword;

      if (!keyword) {
        setMessage("Type a word to see related images.");
        setPhotos([]);
      } else {
        const pexelsApiKey =
          "5vHmaqCVVyxgj5AqGX7rWV4ZM9x9yPqCHFNrsAmFhbS5pD8y2BdiKXaH";
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;

        axios
          .get(pexelsApiUrl, {
            headers: {
              Authorization: pexelsApiKey,
            },
          })
          .then(function (response) {
            if (response.data.photos.length > 0) {
              setPhotos(response.data.photos);
              setMessage("");
            } else {
              setPhotos([]);
              setMessage(`No images found for "${keyword}".`);
            }
          })
          .catch(function () {
            setPhotos([]);
            setMessage("Something went wrong. Please try again.");
          });
      }
    },
    [props.keyword]
  );

  return (
    <div className="container image-gallery">
      {message && <p className="image-message">{message}</p>}
      <div className="row">
        {photos.map(function (photo) {
          return (
            <div className="col-md-4 col-sm-6 mb-4" key={photo.id}>
              <div className="card image-card h-100">
                <img
                  src={photo.src.medium}
                  alt={photo.alt}
                  className="card-img-top"
                />
                {/* <div className="card-body">
    <p className="card-text">{photo.alt}</p>
  </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
