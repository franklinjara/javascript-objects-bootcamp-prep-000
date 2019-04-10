var playlist = { Phil Ochs: "" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[songTitle] = artistName;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist;
}