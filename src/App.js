import { Route, Routes } from "react-router-dom";
import HomePage from "./component/Pages/HomePage";
import MovieDetails from "./component/Pages/MovieDetails";
import SearchPage from "./component/Pages/SearchPage";
import WishList from "./component/Pages/WishList";
import store from '../src/component/redux/Store'
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        {/* <Route path="/wishLIst" element={<WishList />} /> */}
      </Routes>
    </Provider>
  );
}
export default App;
