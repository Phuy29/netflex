export type Show = {
  adult: boolean;
  backdrop_path: string | null;
  media_type: "movie" | "tv";
  budget: number | null;
  homepage: string | null;
  showId: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string | null;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  number_of_seasons: number | null;
  number_of_episodes: number | null;
  release_date: string | null;
  first_air_date: string | null;
  last_air_date: string | null;
  revenue: number | null;
  runtime: number | null;
  status: string | null;
  tagline: string | null;
  title: string | null;
  name: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type NavItem = {
  title: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  mainNav: NavItem[];
  profileDropdownItems: NavItem[];
  footerItems: NavItem[];
  socialLinks: NavItem[];
};

export type CategorizedShows = {
  title: string;
  shows?: Show[];
};

export type Genre = {
  id: number;
  name: string | null;
};

export type ShowWithGenreAndVideo = Show & {
  genres: Genre[];
  videos?: {
    results: VideoResult[];
  };
};

export type VideoResult = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: VideoType;
  official: boolean;
  published_at: string;
  id: string;
};

export type VideoType =
  | "Bloopers"
  | "Featurette"
  | "Behind the Scenes"
  | "Clip"
  | "Trailer"
  | "Teaser";

export enum MEDIA_TYPE {
  movie,
  tv,
}
