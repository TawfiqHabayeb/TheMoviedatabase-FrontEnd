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
  // three routes  instead, false hasAccess set true when the user login is successful, set token local in storage
  return (
    <MainContextProvider>
      <Provider store={store}>
        <Routes>
          {false ? (
            <>
              <AuthCheck>
                <Route path="/" element={<HomePage />} />

                <Route path="/search/:query" element={<SearchPage />} />

                <Route path="/movieDetails/:id" element={<MovieDetails />} />
              </AuthCheck>
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/search/:query" element={<SearchPage />} />
              <Route path="/movieDetails/:id" element={<MovieDetails />} />
              <Route path="Login" element={<Login />} />
              <Route path="SignUp" element={<SignUp />} />
              <Route path="Login" element={<Login />} />
            </>
          )}
        </Routes>
      </Provider>
    </MainContextProvider>
  );
}
export default App;
{
  /* <Route path="/wishLIst" element={<WishList />} /> */
}
