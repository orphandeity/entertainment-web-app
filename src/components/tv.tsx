import { useState, useEffect } from "react";
import MediaList from "./ui/mediaList";

export default function TVSeries() {
  const [media, setMedia] = useState<IMedia[]>([]);

  useEffect(() => {
    async function getTVSeries() {
      const res = await fetch("/api/media?type=tv");
      const data = await res.json();
      setMedia(data.media);
    }
    getTVSeries();
  }, []);

  return media ? <MediaList heading="TV Series" media={media} /> : null;
}
