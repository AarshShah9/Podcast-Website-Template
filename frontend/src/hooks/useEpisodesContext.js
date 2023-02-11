import { EpisodeContext } from "../context/episodeContext";
import { useContext } from "react";

export const useEpisodesContext = () => {
  const context = useContext(EpisodeContext);

  if (!context) {
    throw new Error(
      "useEpisodesContext must be used within a EpisodeContextProvider"
    );
  }

  return context;
};
