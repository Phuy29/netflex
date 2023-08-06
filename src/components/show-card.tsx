import { useAppDispatch } from "@/redux/hook";
import { open, play, show as setShow } from "@/redux/modal-slice";
import { Show } from "@/types";
import Image from "next/image";

const ShowCard = ({ show }: { show: Show }) => {
  const dispatch = useAppDispatch();

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
      onClick={() => {
        dispatch(open(true));
        dispatch(play(true));
        dispatch(setShow(show));
      }}
    />
  );
};

export default ShowCard;
