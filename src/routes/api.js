const express = require("express");
const {
  getUserApi,
  getInfoApi,
  getReleaseChartApi,
  getSongInfoApi,
  getSongApi,
  getListSongArtistApi,
  getDetailPlayListApi,
  getChartHomeApi,
  getNewReleaseChartApi,
  getSearchSongApi,
  getArtistApi,
  getLyricApi,
  getTopApi,
} = require("../controller/apiController");
const { postUsers, getApiUser } = require("../controller/useController");
const router = express.Router();
router.get("/user", getUserApi);
router.get("/home", getInfoApi);
router.get("/newReleaseChart", getReleaseChartApi);
router.get("/songInfo", getSongInfoApi);
router.get("/song", getSongApi);
router.get("/listSongArtist", getListSongArtistApi);
router.get("/detailPlayList", getDetailPlayListApi);
router.get("/chartHome", getChartHomeApi);
router.get("/newReleaseChart", getNewReleaseChartApi);
router.get("/searchSong", getSearchSongApi);
router.get("/artist", getArtistApi);
router.get("/lyric", getLyricApi);
router.get("/top100", getTopApi);
router.post("/login", postUsers);
router.get("/getUser", getApiUser);
module.exports = router;
