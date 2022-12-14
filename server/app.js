// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json())
app.use((req, res, next) =>{
  console.log("Body: ", req.body)
  next();
})

// Your code here
app.get("/artists", (req, res)=>{
  res.json(getAllArtists())
})

app.post('/artists', (req, res)=>{
  const added = addArtist(req.body)
  res.status(201)
  res.json(added)


})

app.get('/artists/latest', (req, res)=>{
  res.json(getLatestArtist())
})

app.get('/artists/latest/albums', (req, res)=>{
  res.json(getAlbumsForLatestArtist())
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
