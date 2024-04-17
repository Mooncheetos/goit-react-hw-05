import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";
const Navigation = lazy(() => import("./Navigation/Navigation"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
function App() {
  return (
    <>
      <Suspense fallback={<Loader />}><Navigation /></Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage/>}/>
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/movcast" element={<MovieCast/>}/>
          <Route path="/movreviews" element={<MovieReviews />} />          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </>
  );    
}

export default App;
