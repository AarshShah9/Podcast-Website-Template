import { createContext, useReducer } from "react";
import React from "react";

export const EpisodeContext = createContext();

export const episodeReducer = (state, action) => {
  switch (action.type) {
    case "SET_EPISODES":
      return { episodes: action.payload };
    case "CREATE_EPISODE":
      return { episodes: [action.payload, ...state.episodes] };
    case "DELETE_EPISODE":
      return {
        episodes: state.episodes.filter(
          (episode) => episode._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const EpisodeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(episodeReducer, {
    episodes: null,
  });

  return (
    <EpisodeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EpisodeContext.Provider>
  );
};
