const express = require("express");
const router = express.Router();
const {
  createEpisode,
  getEpisode,
  getEpisodes,
  updateEpisode,
  deleteEpisode,
} = require("../controllers/episodeController");

// GET all episode data
router.get("/", getEpisodes);

// GET one episode data
router.get("/:id", getEpisode);

// POST one episode data
router.post("/", createEpisode);

// Delete one episode data
router.delete("/:id", deleteEpisode);

// Update one episode data
router.patch("/:id", updateEpisode);

module.exports = router;
