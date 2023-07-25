import { Show } from "@/types";
import Image from "next/image";

const ShowCard = ({ show }: { show: Show }) => {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500/${
        show.backdrop_path ?? show.poster_path ?? ""
      }`}
      alt={show.title ?? show.name ?? "poster"}
      width={240}
      height={135}
      loading="lazy"
      className="aspect-video cursor-pointer object-cover transition-all hover:z-20 hover:scale-110"
    />
  );
};

export default ShowCard;
