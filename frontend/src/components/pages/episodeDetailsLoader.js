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
  }, [dispatch]); // issue with refreshing

  return (
    <div className="container-fluid loader">
      <div className="row text-center">
        <section className="col-6 col-sm">
          {episodes &&
            episodes.map((episode) => (
              <NewEpisodeCard key={episode._id} episode={episode} />
            ))}
        </section>
        <section className="col-6">
          <EpisodeForm />
        </section>
      </div>
    </div>
  );
}

export default EpisodeDetailsLoader;
