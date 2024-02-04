import axios from "./axios-instance";

export async function fetchMusicList() {
  const res = await axios.get(
    "https://academics.newtonschool.co/api/v1/music/song"
  );
  console.log(res);
}

// Fetch -> gives Data Buffer -> convert to JSON
// Axios -> gives Data already coverted to JSON
