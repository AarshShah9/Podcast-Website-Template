import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import EpisodeCard from "./pages/episodeCard";
import { externalLinks, imageLinks } from "../components/values";
import { Credentials } from "../components/credentials";
import "./episodes.css";
import { Buffer } from "buffer";

function Episodes() {
  const [episodes, setEpisodes] = useState([{}]);
  const [token, setToken] = useState("");
  const [loadMore, setLoadMore] = useState(10);
  const elinks = externalLinks();
  const ilinks = imageLinks();
  const spotify = Credentials();
  const [totalEpisodes, setTotalEpisodes] = useState(0);

  function loadMoreHandler() {
    if (loadMore < totalEpisodes) {
      setLoadMore(loadMore + 10);
    }
  }

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(spotify.ClientId + ":" + spotify.ClientSecret).toString(
            "base64"
          ),
      },
      data: "grant_type=client_credentials",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
      axios(
        `https://api.spotify.com/v1/shows/${spotify.showId}/episodes?market=US&limit=${loadMore}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      ).then((episodeResponse) => {
        setEpisodes(episodeResponse.data.items);
        setTotalEpisodes(episodeResponse.data.total);
      });
    });
  }, [
    spotify.ClientId,
    spotify.ClientSecret,
    loadMore,
    spotify.showId,
    token,
  ]);

  return (
    <div className="container">
      <div className="text-dark bg-white" style={{ padding: "15px" }}>
        <div className="row text-dark bg-white p-5 justify-content-center">
          <div className="col-12 col-md-4">
            <img
              className="artwork img-fluid"
              src={ilinks.artwork}
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
              perspective of theclass social dynamics of growing up in a
              westernized paradise by leveraging guests’ experiences,
              knowledge, and wisdom.
            </p>
            <div className="all-links">
              <a
                href={elinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                id="podcast-links"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="podcast-vectors img-fluid bi bi-spotify"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                </svg>
              </a>
              <a
                href={elinks.apple}
                target="_blank"
                rel="noopener noreferrer"
                id="podcast-links"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="podcast-vectors img-fluid bi bi-apple"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                </svg>
              </a>
              <a
                href={elinks.google}
                target="_blank"
                rel="noopener noreferrer"
                id="podcast-links"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  fill="currentColor"
                  className="podcast-vectors img-fluid bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
              <a
                href={elinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="podcast-vectors img-fluid bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {episodes.map((episode, index) => (
        <EpisodeCard
          Title={episode.name}
          Desc={episode.description}
          Runtime={Math.floor(episode.duration_ms / 60000)}
          Date={episode.release_date}
          Link={episode.external_urls}
          key={index}
        />
      ))}
      <div className="row text-dark bg-white p-5 justify-content-center">
        <button
          type="button"
          className="loadmore btn btn-dark col-3"
          onClick={() => loadMoreHandler()}
        >
          {totalEpisodes > loadMore ? "Load More" : "All Episodes Are Loaded"}
        </button>
      </div>
    </div>
  );
}

export default Episodes;
