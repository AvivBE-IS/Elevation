const SongsManager = function () {
  const songs = {};

  const addSong = (songName, url) => {
    const videoId = url.split("v=")[1]; // ✅ extract ID from YouTube URL
    songs[songName] = videoId;
  };

  const getSong = (songName) => {
    const id = songs[songName];
    if (!id) return null;
    return `https://www.youtube.com/watch?v=${id}`;
  };

  return {
    addSong,
    getSong,
  };
};
