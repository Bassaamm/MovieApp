import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import MoviesInfo from "./features/MoviesInfo";
import AppLayout from "./AppLayout";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import BookmarkList from "./features/BookmarkList";

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/:api" element={<AppLayout />} />
            <Route
              path="/bookmark"
              element={<BookmarkList title="bookmark" />}
            />
            <Route path="/movie/:id" element={<MoviesInfo />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
