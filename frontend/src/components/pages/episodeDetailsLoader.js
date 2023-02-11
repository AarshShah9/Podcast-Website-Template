import React from "react";
import NewEpisodeCard from "./newEpisodeCard";
import { useEffect } from "react";
import EpisodeForm from "./episodeForm";
import "./episodeDetailsLoader.css";
import { useEpisodesContext } from "../../hooks/useEpisodesContext";

function EpisodeDetailsLoader() {
  const { episodes, dispatch } = useEpisodesContext();
  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch("/api/episodes");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_EPISODES", payload: json });
      }
    };
    fetchEpisodes();
  });

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-12 col-md-4">
          <section className="created_episodes">
            {episodes &&
              episodes.map((episode) => (
                <NewEpisodeCard key={episode._id} episode={episode} />
              ))}
          </section>
          <section className="new_episode">
            <EpisodeForm />
          </section>
        </div>
      </div>
    </div>
  );
}

export default EpisodeDetailsLoader;
