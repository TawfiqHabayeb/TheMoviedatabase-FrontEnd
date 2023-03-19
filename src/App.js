import { Route, Routes } from "react-router-dom";
import HomePage from "./pageFolder/HomePage";
import MovieDetails from "./pageFolder/MovieDetails";
import SearchPage from "./pageFolder/SearchPage";

import store from "./redux/Store";
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
