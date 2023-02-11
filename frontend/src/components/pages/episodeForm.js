import { React, useState } from "react";
import { useEpisodesContext } from "../../hooks/useEpisodesContext";
import "./episodeForm.css";

function EpisodeForm() {
  const { dispatch } = useEpisodesContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/episodes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setDescription("");
      dispatch({ type: "CREATE_EPISODE", payload: json });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Episode</h3>
      <div className="form-group">
        <label htmlFor="TitleInput">Episode Title</label>
        <input
          className="form-control"
          id="TitleInput"
          placeholder="Title (Required)"
          type={"text"}
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </div>
      <div onSubmit={handleSubmit} className="form-group">
        <label htmlFor="DescriptionInput">Episode Description</label>
        <textarea
          className={"form-control"}
          rows="5"
          id="DescriptionInput"
          aria-describedby="emailHelp"
          placeholder="Enter Description"
          type={"text"}
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-dark">
        Submit
      </button>
      {error && <div className="alert alert-danger">{error}</div>}
    </form>
  );
}

export default EpisodeForm;
