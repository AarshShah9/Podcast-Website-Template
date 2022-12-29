import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import EpisodeCard from "./episodeCard";
import { Credentials } from "./credentials";

// useEffect(() => {
//   axios("https://accounts.spotify.com/api/token", {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization:
//         "Basic " + (spotify.ClientId + ":" + spotify.ClientSecret),
//     },
//     data: "grant_type=client_credentials",
//     method: "POST",
//   }).then((tokenResponse) => {
//     setToken(tokenResponse.data.access_token);

//     axios(`https://api.spotify.com/v1/shows/${showId}/episodes?market=US`, {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + tokenResponse.data.access_token,
//         "Content-Type": "application/json",
//       },
//     }).then((epidsodeResponse) => {
//       setEpisodes(epidsodeResponse.data.items);
//     });
//   });
//   console.log(episodes);
// }, [episodes, spotify.ClientId, spotify.ClientSecret]);

function Episodes() {
  const [episodes, setEpisodes] = useState([{}]);
  const [token, setToken] = useState("");
  const showId = "1CAareyd5S18brittKkAb1";
  const spotify = Credentials();

  useEffect(() => {
    axios(`https://api.spotify.com/v1/shows/${showId}/episodes?market=US`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " +
          "BQBtYAs2Oq-JOri-WYCaTOsINW9QysI_ZlmARoN3gsRsf66sq_b67W7ubZndaeGEVMpVmOydqf5Nug33U3JSpdxgER0jZFVBVgzALCtaq80HStj-WgeQU0olXX32W3QWaTMhFJHZRhOMe4o4PxDhzkGMTzmPJCRBVvPiULzAjYx4dA",
        "Content-Type": "application/json",
      },
    }).then((episodeResponse) => {
      setEpisodes(episodeResponse.data.items);
    });
  }, []);

  return (
    <div>
      <div className="text-dark bg-white" style={{ padding: "15px" }}>
        <div className="row text-dark bg-white p-5 justify-content-center">
          <div className="col-12 col-md-3">
            <img
              className="artwork img-fluid"
              src={"./assets/Artwork.png"}
              alt="Suffering in Paradise Artwork"
            ></img>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="h2 text-left" id="bio-title">
              Suffering in Paradise
            </h2>
            <h5 className="h5">Aarsh Shah & Declan Sander</h5>
            <p>
              Suffering in Paradise is a podcast that aims to provide a unique
              perspective of the social dynamics of growing up in a westernized
              paradise by leveraging guests’ experiences, knowledge, and wisdom.
            </p>
            <div className="all-links">
              <a
                href="https://open.spotify.com/show/1CAareyd5S18brittKkAb1"
                target="_blank"
                rel="noopener noreferrer"
                id="podcast-links"
              >
                <img
                  className="podcast-vectors img-fluid"
                  src="assets/spotify-2.svg"
                  alt="Spotify Link"
                  width=" 40px"
                  height="auto"
                ></img>
              </a>
              <a
                href="https://podcasts.apple.com/ca/podcast/suffering-in-paradise/id1526019658"
                target="_blank"
                rel="noopener noreferrer"
                id="podcast-links"
              >
                <img
                  className="podcast-vectors img-fluid"
                  src="assets/Apple Podcasts logo.svg"
                  alt="Apple Link"
                  width=" 40px"
                  height="auto"
                ></img>
              </a>
              <a
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yZTVhNjczOC9wb2RjYXN0L3Jzcw=="
                target="_blank"
                rel="noopener noreferrer"
                id="podcast-links"
              >
                <img
                  className="podcast-vectors img-fluid"
                  src="assets/google-podcasts.svg"
                  alt="Google Link"
                  width=" 40px"
                  height="auto"
                ></img>
              </a>
              <a
                href="https://www.youtube.com/channel/UCDrrkY1TVKEdAh6jLOMByLQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="podcast-vectors img-fluid"
                  src="assets/youtube-3.svg"
                  alt="Youtube Link"
                  width=" 40px"
                  height="auto"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      {episodes.map((episode) => (
        <EpisodeCard
          Title={episode.name}
          Desc={episode.description}
          Runtime={Math.floor(episode.duration_ms / 60000)}
          Date={episode.release_date}
          Link={episode.external_urls}
        />
      ))}
    </div>
  );
}

export default Episodes;
