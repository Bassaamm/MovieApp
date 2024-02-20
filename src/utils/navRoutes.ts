export type NavRoutesProps = {
  name: string;
  path: string;
};
export const navRoutes: NavRoutesProps[] = [
  { name: "Now Playing", path: "/home" },
  { name: "Top Rated", path: "/top-rated" },
  { name: "Popluar", path: "/popular" },
  { name: "Coming Soon", path: "/upcoming" },
  //   { name: "Now Playing", path: "/search" },
];
