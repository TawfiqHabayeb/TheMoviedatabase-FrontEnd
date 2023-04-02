import Header from "../component/Header";
import Footer from "../component/Footer";
import Search from "../component/Search";
import Section from "../component/Section";
import CardHolder from "../component/Cardholder";
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
