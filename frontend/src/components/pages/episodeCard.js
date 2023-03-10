import React from "react";
import { externalLinks, imageLinks } from "../values";

function EpisodeCard(props) {
  const eLinks = externalLinks();
  const iLinks = imageLinks();
  return (
    <div className="text-dark bg-white" style={{ padding: "15px" }}>
      <a
        className="episodes-hover"
        href={eLinks.spotify}
        target="_blank"
        rel="noopener noreferrer"
        id="episode-links"
        style={{ textDecoration: "none" }}
      >
        <div className="imageBox row text-dark bg-white p-5 justify-content-center">
          <div className="col-12 col-md-2 justify-content-right">
            <img
              className="artwork2 img-fluid"
              src={iLinks.artwork}
              alt="Suffering in Paradise Artwork"
            />
          </div>
          <div className="col-12 col-md-7">
            <h4 className="h4 text-left">{props.Title}</h4>
            <p>
              {props.Date} | {props.Runtime} mins
            </p>
            <p className="text-justify">{props.Desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default EpisodeCard;
