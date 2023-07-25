import Hero from "@/components/hero";
import ShowsContainer from "@/components/show-container";
import { getShows } from "@/lib/fetchers";
import { CategorizedShows } from "@/types";

export default async function Home() {
  const allShows = await getShows();

  const allShowsByCategory: CategorizedShows[] = [
    {
      title: "Trending Now",
      shows: allShows.trending,
    },
    {
      title: "Top Rated",
      shows: allShows.topRated,
    },
    {
      title: "Action Thrillers",
      shows: allShows.action,
    },
    {
      title: "Comedies",
      shows: allShows.comedy,
    },
    {
      title: "Scary Movies",
      shows: allShows.horror,
    },
    {
      title: "Romance Movies",
      shows: allShows.romance,
    },
    {
      title: "Documentaries",
      shows: allShows.docs,
    },
  ];

  return (
    <section>
      <div className="pb-16 pt-10">
        <Hero shows={allShows.netflix} />
        <ShowsContainer shows={allShowsByCategory} />
      </div>
    </section>
  );
}
