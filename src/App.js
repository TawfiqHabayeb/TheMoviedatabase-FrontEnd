import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MovieDetails from "./Pages/MovieDetails";
import SearchPage from "./Pages/SearchPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import store from "./redux/Store";
import { Provider } from "react-redux";
import { MainContextProvider } from "./Context/MainContextProvider";
import AuthCheck from "./Services/AuthCheck";
function App() {

  return (
    <MainContextProvider>
      <Provider store={store}>
        <AuthCheck>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/HomePage" element={<HomePage />} />

            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="SignUp" element={<SignUp />} />

            <Route path="/movieDetails/:id" element={<MovieDetails />} />
          </Routes>
        </AuthCheck>
      </Provider>
    </MainContextProvider>
  );
}
export default App;

  /* <Route path="/wishLIst" element={<WishList />} /> */

