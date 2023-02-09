import React from "react";
import NewEpisodeCard from "./newEpisodeCard";
import { useEffect, useState } from "react";

function SignIn() {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch("http://localhost::4000/api/episodes");
      const json = await response.json();

      if (response.ok) {
        setEpisodes(json);
      }
    };
    fetchEpisodes();
  });

  return (
    <div>
      {episodes &&
        episodes.map((episode) => (
          <NewEpisodeCard key={episode._id} episode={episode} />
        ))}
    </div>
  );
}

export default SignIn;
