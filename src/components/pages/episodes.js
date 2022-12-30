import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import EpisodeCard from "./episodeCard";
import { externalLinks } from "../values";
import { Credentials } from "../credentials";
import "./episodes.css";

function Episodes() {
  const [episodes, setEpisodes] = useState([{}]);
  const [token, setToken] = useState("");
  const [loadMore, setLoadMore] = useState(10);
  const links = externalLinks();
  const spotify = Credentials();
  const [totalEpisodes, setTotalEpisodes] = useState(0);

  function loadMoreHandler() {
    if (loadMore < totalEpisodes) {
      setLoadMore(loadMore + 10);
    }
    // else {
    //   const test = {
    //     items: [
    //       {
    //         audio_preview_url:
    //           "https://p.scdn.co/mp3-preview/447a41635ee70524a301bf612fb0f8f842d90662",
    //         description:
    //           "Aarsh and Declan bring on Rachel Lauer as a guest to discuss her windy path to 'success' as well as some of the issues she's faced in her life including her eating disorder. We would also like to recognize the support of Taking It Global, Service Corps Canada and the Government of Canada.",
    //         duration_ms: 3337430,
    //         explicit: false,
    //         external_urls: {
    //           spotify:
    //             "https://open.spotify.com/episode/6aELS0cD26qbKggHnuYFlW",
    //         },
    //         href: "https://api.spotify.com/v1/episodes/6aELS0cD26qbKggHnuYFlW",
    //         html_description:
    //           "<p>Aarsh and Declan bring on Rachel Lauer as a guest to discuss her windy path to &#39;success&#39; as well as some of the issues she&#39;s faced in her life including her eating disorder.</p><br/><p>We would also like to recognize the support of Taking It Global, Service Corps Canada and the Government of Canada.</p>",
    //         id: "6aELS0cD26qbKggHnuYFlW",
    //         images: [
    //           {
    //             height: 640,
    //             url:
    //               "https://i.scdn.co/image/ab6765630000ba8acbfff9b0c4c87ecdd720e621",
    //             width: 640,
    //           },
    //           {
    //             height: 300,
    //             url:
    //               "https://i.scdn.co/image/ab67656300005f1fcbfff9b0c4c87ecdd720e621",
    //             width: 300,
    //           },
    //           {
    //             height: 64,
    //             url:
    //               "https://i.scdn.co/image/ab6765630000f68dcbfff9b0c4c87ecdd720e621",
    //             width: 64,
    //           },
    //         ],
    //         is_externally_hosted: false,
    //         is_playable: true,
    //         language: "en",
    //         languages: ["en"],
    //         name: "Navigating the Changes of Life (Ft. Rachel Lauer)",
    //         release_date: "2022-05-30",
    //         release_date_precision: "day",
    //         resume_point: {
    //           fully_played: false,
    //           resume_position_ms: 0,
    //         },
    //         type: "episode",
    //         uri: "spotify:episode:6aELS0cD26qbKggHnuYFlW",
    //       },
    //     ],
    //   };
    //   console.log(test.items[0].external_urls.spotify);
    // }
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
            Authorization: "Bearer " + tokenResponse.data.access_token,
            "Content-Type": "application/json",
          },
        }
      ).then((episodeResponse) => {
        setEpisodes(episodeResponse.data.items);
        setTotalEpisodes(episodeResponse.data.total);
      });
    });
  }, [spotify.ClientId, spotify.ClientSecret, loadMore]);

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
                href={links.spoitfy}
                target="_blank"
                rel="noopener noreferrer"
                id="podcast-links"
              >
                <img
                  className="podcast-vectors img-fluid"
                  src="images/spotify-2.svg"
                  alt="Spotify Link"
                  width=" 40px"
                  height="auto"
                />
              </a>
              <a
                href={links.apple}
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
                href={links.google}
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
              <a href={links.youtube} target="_blank" rel="noopener noreferrer">
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
          className="btn btn-dark col-3"
          onClick={() => loadMoreHandler()}
        >
          {totalEpisodes > loadMore ? "Load More" : "All Episodes Are Loaded"}
        </button>
      </div>
    </div>
  );
}

export default Episodes;
