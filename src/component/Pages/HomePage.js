import Header from "../Header";
import Footer from "../Footer";
import Search from "../Search";
import Section from "../../Section/Section";
import CardHolder from "../Container/Cardholder";
import "/Users/tawfiqhabayeb/movie-app/src/App.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Search SearchMovie />
      <Section title="New Movies" />
      <CardHolder />
      <Footer />
    </div>
  );
};

export default HomePage;
