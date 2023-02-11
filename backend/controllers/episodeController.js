const Episode = require("../models/episodeModel");
const mongoose = require("mongoose");

// GET all episode data
const getEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find({}).sort({ createdAt: -1 });
    res.status(200).json(episodes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a single episode data
const getEpisode = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Episode not found" });
  }

  const episode = await Episode.findById(id);

  if (!episode) {
    return res.status(404).json({ error: "Episode not found" });
  }
  res.status(200).json(episode);
};

// (CREATE) POST one episode data
const createEpisode = async (req, res) => {
  const { title, description } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const episode = await Episode.create({
      title,
      description,
    });
    res.status(200).json(episode);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete one episode data
const deleteEpisode = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Episode not found" });
  }
  const episode = await Episode.findOneAndDelete({ _id: id });
  // Checks if the episode was found and deleted
  if (!episode) {
    return res.status(400).json({ error: "Episode not found" });
  }

  res.status(200).json({ message: "Episode deleted successfully" });
};

// update one episode data
const updateEpisode = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Episode not found" });
  }
  const episode = await Episode.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!episode) {
    return res.status(400).json({ error: "Episode not found" });
  }
  res.status(200).json(episode);
};

module.exports = {
  createEpisode,
  getEpisodes,
  getEpisode,
  deleteEpisode,
  updateEpisode,
};
