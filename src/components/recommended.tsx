import { useState, useEffect } from "react";
import Thumbnail from "./thumbnail";

export default function Recommended() {
  const [recommended, setRecommended] = useState<IMedia[]>([]);

  useEffect(() => {
    async function getRecommended() {
      const res = await fetch("/api/media?type=recommended");
      const data = await res.json();
      setRecommended(data.media);
    }
    getRecommended();
  }, []);

  return (
    <section className="mx-4 space-y-6 md:mx-6 lg:mx-0">
      <h2>Recommended for you</h2>
      <ul className="flex flex-wrap gap-x-[15px] gap-y-4 md:gap-x-[1.875rem] md:gap-y-6 lg:gap-x-10 lg:gap-y-8">
        {recommended.map((media) => (
          <li key={media.title}>
            <Thumbnail data={media} />
          </li>
        ))}
      </ul>
    </section>
  );
}
