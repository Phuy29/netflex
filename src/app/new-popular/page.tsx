import Hero from "@/components/hero";
import ShowsContainer from "@/components/show-container";
import { getNewAndPopularShows, getShows } from "@/lib/fetchers";
import { CategorizedShows } from "@/types";

export default async function Home() {
  const allShows = await getNewAndPopularShows();

  const allShowsByCategory: CategorizedShows[] = [
    {
      title: "Trending Movies",
      shows: allShows.trendingMovies,
    },
    {
      title: "Trending Movies",
      shows: allShows.trendingTvs,
    },
    {
      title: "Popular Movies",
      shows: allShows.popularMovies,
    },
    {
      title: "Popular Tvs",
      shows: allShows.popularTvs,
    },
  ];

  return (
    <section>
      <div className="pb-16 pt-10">
        <ShowsContainer shows={allShowsByCategory} />
      </div>
    </section>
  );
}
