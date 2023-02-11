import React from "react";
import { useEpisodesContext } from "../../hooks/useEpisodesContext";

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
    <div>
      <h2>{props.episode.title}</h2>
      <p>{props.episode.description}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
}

export default NewEpisodeCard;
