export function getMovieImage(movieUrl: string): string {
  return `https://image.tmdb.org/t/p/w500${movieUrl}`;
}
