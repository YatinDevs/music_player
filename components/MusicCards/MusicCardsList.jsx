import { useEffect, useState } from "react";
import { MusicCard } from "./MusicCard";
import { fetchMusicList } from "@/apis/music";
import { MusicCard } from "./MusicCard";

export function MusicCardsList() {
  const [musicData, setMusicData] = useState([]);
  const page = useRef(1);
  
  useEffect(() => {
    fetchMusicList();
  }, []);
  return (
    <div id="music-cards-container">
      {musicData.map((song) => (
        <MusicCard song={song} />
      ))}
    </div>
  );
}
