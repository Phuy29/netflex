"use client";

import { usePathname } from "next/navigation";
import type { CategorizedShows } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import ShowCard from "./show-card";

interface ShowsContainerProps {
  shows: CategorizedShows[];
}

const ShowsContainer = ({ shows }: ShowsContainerProps) => {
  const path = usePathname();

  return (
    <div
      className={cn("w-full space-y-5 sm:space-y-10", path === "/" && "pt-24")}
    >
      {shows.map((item) => (
        <section aria-label="Carousel of shows" key={item.title}>
          {shows.length !== 0 && (
            <div className="container w-full max-w-screen-2xl space-y-1 sm:space-y-2.5">
              <h2 className="text-lg font-semibold text-white/90 transition-colors hover:text-white sm:text-xl">
                {item.title}
              </h2>
              <div className="flex h-full w-full items-center gap-1.5 overflow-x-auto overflow-y-hidden">
                {item.shows?.map((show) => (
                  <ShowCard key={show.id} show={show} />
                ))}
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default ShowsContainer;
