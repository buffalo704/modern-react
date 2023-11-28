import { createRandomSong } from "../data";
import {useDispatch, useSelector} from "react-redux";
import {addSong, removeSong} from "../store";

interface SongState {
  songs: string[];
}

function SongPlaylist() {
  const dispatch = useDispatch();
  const songPlaylist = useSelector((state:SongState) => state.songs);

  const handleSongAdd = (song: string) => {
   dispatch(addSong(song));
  };
  const handleSongRemove = (song: string) => {
    // To Do:
    // Remove song from list of songs
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song: string) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
