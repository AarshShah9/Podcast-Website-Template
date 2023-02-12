import React from "react";
import { useEpisodesContext } from "../../hooks/useEpisodesContext";
import "./newEpisodeCard.css";

function NewEpisodeCard(props) {
  const { dispatch } = useEpisodesContext();

  const handleClick = async () => {
    const response = await fetch(`/api/episodes/${props.episode._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_EPISODE", payload: json });
    }
  };

  return (
    <div id="card">
      <div id="internalcard">
        <div className="div1">
          <h2>{props.episode.title}</h2>
          <p>{props.episode.description}</p>
        </div>
        <div className="div2">
          <button className="btn btn-dark" onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewEpisodeCard;
